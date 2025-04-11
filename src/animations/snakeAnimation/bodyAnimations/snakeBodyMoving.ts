import { snakeSteps } from '../../../types/animationTypes'
import { getSnakeUnitPosition, setSnakeUnitPosition } from './snakeBodyProps'
import { getSnakeSpeed } from '../snakeSpeedSetting'
import { checkTimerWorking } from '../../../engine/time/isTimer'
import { checkMistake } from '../../../engine/lives/isMistake'
import { breakContact, checkContact } from '../../../engine/events/isContact'
import { getDiff } from './snakeDiff'
import { getSnakeBodyCoord, getSnakeHeadParams } from '../../../engine/snake/snake'
import { getCounterHead } from '../headAnimations/snakeHeadLocation'

export const snakeBodyMoving = (delta: number) => {
  const moveSpeed = getSnakeSpeed()
  const pos = getSnakeUnitPosition().map((positions) => {
    positions[0] += getDiff()[0].diffX * delta * moveSpeed
    positions[1] += getDiff()[1].diffY * delta * moveSpeed
    positions[2] = 0
    if (getSnakeHeadParams().snakeHeadStepX === 0) positions[0] = Math.round(positions[0])
    if (getSnakeHeadParams().snakeHeadStepY === 0) positions[1] = Math.round(positions[1])
    return positions
  })

  const [counterHeadX, counterHeadY] = getCounterHead()
  if (counterHeadX === 0 && counterHeadY === 0) {
    if (
      getSnakeHeadParams().snakeHeadStepX !== 0 ||
      getSnakeHeadParams().snakeHeadStepY !== 0
    ) {
      console.log(
        'координаты движка: ',
        getSnakeBodyCoord()[0],
        getSnakeBodyCoord()[1],
        getSnakeBodyCoord()[2]
      )
      console.log('смещения 3D координат: ', getDiff()[0], getDiff()[1], getDiff()[2])
      console.log(
        'координаты 3D змейки: ',
        getSnakeUnitPosition()[0],
        getSnakeUnitPosition()[1],
        getSnakeUnitPosition()[2]
      )
    }
  }

  setSnakeUnitPosition(pos)
}
