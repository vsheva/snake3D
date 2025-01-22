import { getProtocol } from '../../engine/protocol/protocol'
import { getSnakeHeadParams } from '../../engine/snake/snake'
import { snakeSteps } from '../../types/animationTypes'
import { getCounterHead } from './headAnimations/snakeHeadLocation'

export const snakeStepSetting = (step: snakeSteps): snakeSteps => {
  if (getCounterHead()[0] === 0 && getCounterHead()[1] === 0) {
    step.currentStepX = getSnakeHeadParams().snakeHeadStepX
    step.currentStepY = getSnakeHeadParams().snakeHeadStepY
  }
  if (step.currentStepX !== 0 && step.currentStepX === -step.previousStepX) {
    step.currentStepX = 0
    step.currentStepY = +getProtocol()[getProtocol().length - 2].value
  }
  if (step.currentStepY !== 0 && step.currentStepY === -step.previousStepY) {
    step.currentStepY = 0
    step.currentStepX = +getProtocol()[getProtocol().length - 2].value
  }
  return step
}
