import { snakeSteps } from '../../../types/animationTypes'
import * as PROPS from './snakeHeadProps'

export const snakeHeadTurnaround = (steps: snakeSteps) => {
  const { previousStepX, previousStepY, currentStepX, currentStepY } = steps
  const rotationHead = PROPS.getRotationHead()
  if (previousStepX === 0 && currentStepX === 1) rotationHead[2] = 11
  if (previousStepX === 0 && currentStepX === -1) rotationHead[2] = 33
  if (previousStepY === 0 && currentStepY === -1) rotationHead[2] = 22
  if (previousStepY === 0 && currentStepY === 1) rotationHead[2] = 0
  PROPS.setRotationHead(rotationHead)
}
