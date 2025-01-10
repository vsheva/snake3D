import { snakeANIMATION } from '../../../config/snakeConfig/snakeANIMATION/snakeANIMATION'
import { setSnakePosition } from '../../../engine/snake/setSnakePosition'
import checkTimerStep from '../../../engine/time/checkTimerStep'
import { snakeSteps } from '../../../types/animationTypes'

let counterHeadX = 0
let counterHeadY = 0

export const snakeHeadLocation = (steps: snakeSteps, delta: number) => {
  const { previousStepX, previousStepY, currentStepX, currentStepY } = steps
  if (!checkTimerStep()) {
    const { moveSpeed } = snakeANIMATION
    counterHeadX = counterHeadX + currentStepX * delta * moveSpeed
    counterHeadY = counterHeadY + currentStepY * delta * moveSpeed
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
