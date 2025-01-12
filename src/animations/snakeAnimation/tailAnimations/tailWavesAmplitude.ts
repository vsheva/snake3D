import { snakeTailANIMATION } from '../../../config/snakeConfig/snakeANIMATION/snakeTAIL/snakeTailAnimation'
import { snakeSteps } from '../../../types/animationTypes'

const { waveAmplitude } = snakeTailANIMATION
const tailWavesAmplitude = [-waveAmplitude, 0]

export const setTailWavesAmplitude = (steps: snakeSteps, wave = [0, 0]) => {
  const { previousStepX, previousStepY, currentStepX, currentStepY } = steps
  if (previousStepX !== 0 || previousStepY !== 0) {
    if (currentStepX === 0 && currentStepY === 1) {
      tailWavesAmplitude[0] = -waveAmplitude
      tailWavesAmplitude[1] = 0
    } else if (currentStepX === 0 && currentStepY === -1) {
      tailWavesAmplitude[0] = waveAmplitude
      tailWavesAmplitude[1] = 0
    } else if (currentStepY === 0 && currentStepX === -1) {
      tailWavesAmplitude[0] = 0
      tailWavesAmplitude[1] = -waveAmplitude
    } else if (currentStepY === 0 && currentStepX === 1) {
      tailWavesAmplitude[0] = 0
      tailWavesAmplitude[1] = waveAmplitude
    }
  } else {
    tailWavesAmplitude[0] = wave[0]
    tailWavesAmplitude[1] = wave[1]
  }
}

export const getTailWavesAmplitude = (): number[] => {
  return tailWavesAmplitude
}
