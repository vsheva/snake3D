import { snakeSteps } from '../../../types/animationTypes'
import { snakeANIMATION } from '../../../config/snakeConfig/snakeANIMATION/snakeANIMATION'
import { getPositionHead, setPositionHead } from './snakeHeadProps'

export const snakeHeadMoving = (steps: snakeSteps, delta: number) => {
  const { currentStepX, currentStepY } = steps
  const { moveSpeed } = snakeANIMATION
  const positionHead = getPositionHead()

  positionHead[0] += currentStepX * delta * moveSpeed
  positionHead[1] += currentStepY * delta * moveSpeed
  setPositionHead(positionHead)
}
