import { getProtocol } from '../../engine/protocol/protocol'
import { getSnakeHeadParams } from '../../engine/snake/snake'
import checkTimerStep from '../../engine/time/checkTimerStep'
import { snakeSteps } from '../../types/animationTypes'
import { getCounterHead, snakeHeadLocation } from './headAnimations/snakeHeadLocation'
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
      currentStepX: previousStepX,
      currentStepY: previousStepY,
    }
    if (getCounterHead()[0] === 0 && getCounterHead()[1] === 0) {
      snakeSteps.currentStepX = getSnakeHeadParams().snakeHeadStepX
      snakeSteps.currentStepY = getSnakeHeadParams().snakeHeadStepY
    }
    if (
      snakeSteps.currentStepX !== 0 &&
      snakeSteps.currentStepX === -snakeSteps.previousStepX
    ) {
      snakeSteps.currentStepX = 0
      snakeSteps.currentStepY = +getProtocol()[getProtocol().length - 2].value
    }
    if (
      snakeSteps.currentStepY !== 0 &&
      snakeSteps.currentStepY === -snakeSteps.previousStepY
    ) {
      snakeSteps.currentStepY = 0
      snakeSteps.currentStepX = +getProtocol()[getProtocol().length - 2].value
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
