import allContactEvents from '../events/allContactEvents'
import { breakContact } from '../events/isContact'
import { checkMistake } from '../lives/isMistake'
import { checkTimerWorking, startTimer } from '../time/isTimer'
import { getSnakeHeadParams, setSnakeHeadParams } from './snake'
import * as SNAKE from './snake'

type positionCounter = {
  counterX: number
  counterY: number
}

export const setSnakePosition = (props: positionCounter): number[] => {
  let { counterX, counterY } = props
  if (checkTimerWorking()) {
    let snakeHead = { ...SNAKE.getSnakeHeadParams() }
    const newBodyCoord = [...SNAKE.getSnakeBodyCoord()]
    if (snakeHead.snakeHeadStepX !== 0 || snakeHead.snakeHeadStepY !== 0) {
      if (Math.abs(counterX) > 1) {
        snakeHead = {
          ...getSnakeHeadParams(),
          snakeHeadCoordX:
            counterX > 0
              ? getSnakeHeadParams().snakeHeadCoordX + 1
              : getSnakeHeadParams().snakeHeadCoordX - 1,
        }
        counterX = 0
      }
      if (Math.abs(counterY) > 1) {
        snakeHead = {
          ...getSnakeHeadParams(),
          snakeHeadCoordY:
            counterY > 0
              ? getSnakeHeadParams().snakeHeadCoordY + 1
              : getSnakeHeadParams().snakeHeadCoordY - 1,
        }
        counterY = 0
      }
      snakeHead = allContactEvents(snakeHead)
      SNAKE.setSnakeHeadParams(snakeHead)
      if (checkTimerWorking() && !checkMistake()) {
        breakContact()
        for (let i = newBodyCoord.length - 1; i > 0; i--)
          newBodyCoord[i] = newBodyCoord[i - 1]
        newBodyCoord[0] = [snakeHead.snakeHeadCoordX, snakeHead.snakeHeadCoordY]
        // if (counterX === 0 && counterY === 0) console.log('move', newBodyCoord)
        //SNAKE.setSnakeBodyCoord(newBodyCoord)
      } else startTimer()
    }
  }
  return [counterX, counterY]
}
