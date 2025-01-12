import { snakeSteps } from '../../../types/animationTypes'
import * as PROPS from './snakeHeadProps'

export const snakeHeadTurnaround = (steps: snakeSteps) => {
  const { previousStepX, previousStepY, currentStepX, currentStepY } = steps
  const positionHead = PROPS.getPositionHead()
  const rotationHead = PROPS.getRotationHead()
  if (previousStepX === -1 && currentStepX === 0 && currentStepY === 1) {
    positionHead[0] = Math.floor(positionHead[0]) // leftUp
    positionHead[1] = Math.ceil(positionHead[1])
  }
  if (previousStepX === -1 && currentStepX === 0 && currentStepY === -1) {
    positionHead[0] = Math.floor(positionHead[0]) // leftDown
    positionHead[1] = Math.floor(positionHead[1])
  }
  if (previousStepX === 1 && currentStepX === 0 && currentStepY === 1) {
    positionHead[0] = Math.ceil(positionHead[0]) // rightUp
    positionHead[1] = Math.ceil(positionHead[1])
  }
  if (previousStepX === 1 && currentStepX === 0 && currentStepY === -1) {
    positionHead[0] = Math.ceil(positionHead[0]) // rightDown
    positionHead[1] = Math.floor(positionHead[1])
  }
  if (previousStepY === 1 && currentStepY === 0 && currentStepX === 1) {
    positionHead[0] = Math.ceil(positionHead[0]) // upRight
    positionHead[1] = Math.ceil(positionHead[1])
  }
  if (previousStepY === 1 && currentStepY === 0 && currentStepX === -1) {
    positionHead[0] = Math.floor(positionHead[0]) // upLeft
    positionHead[1] = Math.ceil(positionHead[1])
  }
  if (previousStepY === -1 && currentStepY === 0 && currentStepX === 1) {
    positionHead[0] = Math.ceil(positionHead[0]) // downRight
    positionHead[1] = Math.floor(positionHead[1])
  }
  if (previousStepY === -1 && currentStepY === 0 && currentStepX === -1) {
    positionHead[0] = Math.floor(positionHead[0]) // downLeft
    positionHead[1] = Math.floor(positionHead[1])
  }
  if (previousStepX === 0 && currentStepX === 1) rotationHead[2] = 11
  if (previousStepX === 0 && currentStepX === -1) rotationHead[2] = 33
  if (previousStepY === 0 && currentStepY === -1) rotationHead[2] = 22
  if (previousStepY === 0 && currentStepY === 1) rotationHead[2] = 0
  PROPS.setPositionHead(positionHead)
  PROPS.setRotationHead(rotationHead)
}
