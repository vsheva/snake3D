import { snakeSteps } from '../../../types/animationTypes'
import { getPositionHead, setPositionHead } from './snakeHeadProps'
import { getSnakeSpeed } from '../snakeSpeedSetting'
import { checkTimerWorking } from '../../../engine/time/isTimer'
import { checkMistake } from '../../../engine/lives/isMistake'
import { breakContact, checkContact } from '../../../engine/events/isContact'

export const snakeHeadMoving = (steps: snakeSteps, delta: number) => {
  const { currentStepX, currentStepY } = steps
  const moveSpeed = getSnakeSpeed()
  const positionHead = getPositionHead()
  // if (checkTimerWorking() && !checkContact()) {

  positionHead[0] += currentStepX * delta * moveSpeed
  positionHead[1] += currentStepY * delta * moveSpeed
  if (currentStepX === 0) positionHead[0] = Math.round(positionHead[0])
  if (currentStepY === 0) positionHead[1] = Math.round(positionHead[1])
  // }
  setPositionHead(positionHead)
}
