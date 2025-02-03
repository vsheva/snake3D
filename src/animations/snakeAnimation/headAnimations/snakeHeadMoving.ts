import { snakeSteps } from '../../../types/animationTypes'
import { getPositionHead, setPositionHead } from './snakeHeadProps'
import { getSnakeSpeed } from '../snakeSpeedSetting'

export const snakeHeadMoving = (steps: snakeSteps, delta: number) => {
  const { currentStepX, currentStepY } = steps
  const moveSpeed = getSnakeSpeed()
  const positionHead = getPositionHead()

  positionHead[0] += currentStepX * delta * moveSpeed
  positionHead[1] += currentStepY * delta * moveSpeed
  if (currentStepX === 0) positionHead[0] = Math.trunc(positionHead[0])
  if (currentStepY === 0) positionHead[1] = Math.trunc(positionHead[1])
  setPositionHead(positionHead)
}
