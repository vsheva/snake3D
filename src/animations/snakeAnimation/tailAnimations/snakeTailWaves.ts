import { checkTimerWorking } from '../../../engine/time/isTimer'
import { snakeSteps } from '../../../types/animationTypes'
import { getHeadWave } from '../headAnimations/snakeHeadWaves'
import { getTailWavesAmplitude } from './tailWavesAmplitude'

const tailWave = [0, 0]

export const snakeTailWaves = (steps: snakeSteps) => {
  const tailWavesAmplitude = getTailWavesAmplitude()
  const headWave = getHeadWave()
  if (checkTimerWorking()) {
    if (steps.currentStepX === 0) {
      tailWave[0] = headWave[0] * tailWavesAmplitude[0]
      tailWave[1] = headWave[1] * tailWavesAmplitude[1]
    } else {
      tailWave[0] = headWave[1] * tailWavesAmplitude[1]
      tailWave[1] = headWave[0] * tailWavesAmplitude[0]
    }
  }
}

export const getTailMove = (): number[] => {
  return tailWave
}
