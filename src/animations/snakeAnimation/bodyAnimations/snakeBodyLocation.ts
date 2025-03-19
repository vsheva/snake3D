import { setSnakePosition } from '../../../engine/snake/setSnakePosition'
import checkTimerStep from '../../../engine/time/checkTimerStep'
import { snakeSteps } from '../../../types/animationTypes'
import { getSnakeSpeed } from '../snakeSpeedSetting'

let counterX = 0
let counterY = 0

export const snakeBodyLocation = (steps: snakeSteps, delta: number) => {
  const { previousStepX, previousStepY, currentStepX, currentStepY } = steps
  if (!checkTimerStep()) {
    const moveSpeed = getSnakeSpeed()
    counterX = counterX + currentStepX * delta * moveSpeed
    counterY = counterY + currentStepY * delta * moveSpeed
    ;[counterX, counterY] = setSnakePosition({
      counterX,
      counterY,
    })
    if (previousStepX !== 0 && currentStepX === 0 && currentStepY !== 0) counterX = 0
    if (previousStepY !== 0 && currentStepX !== 0 && currentStepY === 0) counterY = 0
  }
}

export const getCounter = () => {
  return [counterX, counterY]
}
