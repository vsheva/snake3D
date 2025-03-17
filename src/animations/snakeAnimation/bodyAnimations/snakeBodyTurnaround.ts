let snakeBodyTurn = 1

export const setBodyTurnaround = (body: number) => {
  snakeBodyTurn = body
}

export const getBodyTurnaround = () => snakeBodyTurn

import { snakeSteps } from '../../../types/animationTypes'
import * as PROPS from './snakeBodyProps'

export const snakeBodyTurnaround = (steps: snakeSteps) => {
  const rotations: number[][] = Array(PROPS.getSnakeUnitRotation().length).fill([0, 0, 0])
  const { previousStepX, previousStepY, currentStepX, currentStepY } = steps
  PROPS.getSnakeUnitRotation().forEach((_, index) => {
    if (index === 0) {
      if (previousStepX === 0 && currentStepX === 1) rotations[index][2] = 11
      if (previousStepX === 0 && currentStepX === -1) rotations[index][2] = 33
      if (previousStepY === 0 && currentStepY === -1) rotations[index][2] = 22
      if (previousStepY === 0 && currentStepY === 1) rotations[index][2] = 0
    }
  })

  PROPS.setSnakeUnitRotation(rotations)
}
