import { snakeSteps } from '../../../types/animationTypes'
import { getSnakeUnitPosition, setSnakeUnitPosition } from './snakeBodyProps'
import { getSnakeSpeed } from '../snakeSpeedSetting'
import { checkTimerWorking } from '../../../engine/time/isTimer'
import { checkMistake } from '../../../engine/lives/isMistake'
import { breakContact, checkContact } from '../../../engine/events/isContact'
import { getDiff } from './snakeDiff'

export const snakeBodyMoving = (steps: snakeSteps, delta: number) => {
  const positions: number[][] = Array(getSnakeUnitPosition().length).fill([0, 0, 0])
  const { currentStepX, currentStepY } = steps
  const moveSpeed = getSnakeSpeed()
  getSnakeUnitPosition().forEach((_, index) => {
    const unitCurrentStepX = index === 0 ? currentStepX : getDiff()[0]
    const unitCurrentStepY = index === 0 ? currentStepY : getDiff()[1]
    positions[index][0] += unitCurrentStepX * delta * moveSpeed
    positions[index][1] += unitCurrentStepY * delta * moveSpeed
    positions[index][2] = 0
    if (currentStepX === 0) positions[index][0] = Math.round(positions[index][0])
    if (currentStepY === 0) positions[index][1] = Math.round(positions[index][1])
  })

  setSnakeUnitPosition(positions)
}
