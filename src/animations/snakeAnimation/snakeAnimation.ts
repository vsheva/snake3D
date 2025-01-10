import { getSnakeHeadParams } from '../../engine/snake/snake'
import checkTimerStep from '../../engine/time/checkTimerStep'
import { snakeSteps } from '../../types/animationTypes'
import { snakeHeadLocation } from './headAnimations/snakeHeadLocation'
import { snakeHeadMoving } from './headAnimations/snakeHeadMoving'
import { snakeHeadTurnaround } from './headAnimations/snakeHeadTurnaround'
import { setHeadWave } from './headAnimations/snakeHeadWaves'
import { snakeTailTurnaround } from './tailAnimations/snakeTailTurnaround'
import { snakeTailWaves } from './tailAnimations/snakeTailWaves'
import { setTailWavesAmplitude } from './tailAnimations/tailWavesAmplitude'

let previousStepX = 0
let previousStepY = 0

export const snakeAnimation = (delta: number) => {
  if (!checkTimerStep()) {
    const snakeSteps: snakeSteps = {
      previousStepX,
      previousStepY,
      currentStepX: getSnakeHeadParams().snakeHeadStepX,
      currentStepY: getSnakeHeadParams().snakeHeadStepY,
    }
    setTailWavesAmplitude(snakeSteps)
    snakeHeadLocation(snakeSteps, delta)
    snakeHeadTurnaround(snakeSteps)
    snakeTailTurnaround(snakeSteps)

    previousStepX = snakeSteps.currentStepX
    previousStepY = snakeSteps.currentStepY
    snakeHeadMoving(snakeSteps, delta)
    setHeadWave(snakeSteps)
    snakeTailWaves(snakeSteps)
  }
}
