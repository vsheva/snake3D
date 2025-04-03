import { setSnakePosition } from '../../../engine/snake/setSnakePosition'
import { getSnakeHeadParams } from '../../../engine/snake/snake'
import checkTimerStep from '../../../engine/time/checkTimerStep'
import { snakeSteps } from '../../../types/animationTypes'
import { getSnakeSpeed } from '../snakeSpeedSetting'

let counterHeadX = 0
let counterHeadY = 0

export const snakeHeadLocation = (steps: snakeSteps, delta: number) => {
  const { previousStepX, previousStepY, currentStepX, currentStepY } = steps
  if (!checkTimerStep()) {
    // console.log({ currentStepX, currentStepY })
    const moveSpeed = getSnakeSpeed()
    counterHeadX = counterHeadX + currentStepX * delta * moveSpeed
    counterHeadY = counterHeadY + currentStepY * delta * moveSpeed
    // console.log(getSnakeHeadParams())
    ;[counterHeadX, counterHeadY] = setSnakePosition({
      counterX: counterHeadX,
      counterY: counterHeadY,
    })
    if (previousStepX !== 0 && currentStepX === 0 && currentStepY !== 0) counterHeadX = 0
    if (previousStepY !== 0 && currentStepX !== 0 && currentStepY === 0) counterHeadY = 0
  }
}

export const getCounterHead = () => {
  return [counterHeadX, counterHeadY]
}
