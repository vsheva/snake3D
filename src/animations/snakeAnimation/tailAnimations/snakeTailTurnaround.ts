import { snakeTailANIMATION } from '../../../config/snakeConfig/snakeANIMATION/snakeTAIL/snakeTailAnimation'
import { snakeSteps } from '../../../types/animationTypes'
import * as TAIL from './snakeTailAnimationSet'
import { setTailWavesAmplitude } from './tailWavesAmplitude'

const { waveAmplitude } = snakeTailANIMATION

export const snakeTailTurnaround = (steps: snakeSteps) => {
  if (TAIL.getTailAnimatingCounter() === 0 && TAIL.getTailAnimatingQueue().length > 0) {
    TAIL.setIsTailAnimating(true)
  }
  const { previousStepX, previousStepY, currentStepX, currentStepY } = steps
  if (previousStepX === -1 && currentStepX === 0 && currentStepY === 1) {
    setTailWavesAmplitude(steps, [-waveAmplitude, 0])
    TAIL.setTailAnimatingQueue('leftUp')
  }
  if (previousStepX === -1 && currentStepX === 0 && currentStepY === -1) {
    setTailWavesAmplitude(steps, [waveAmplitude, 0])
    TAIL.setTailAnimatingQueue('leftDown')
  }
  if (previousStepX === 1 && currentStepX === 0 && currentStepY === 1) {
    setTailWavesAmplitude(steps, [-waveAmplitude, 0])
    TAIL.setTailAnimatingQueue('rightUp')
  }
  if (previousStepX === 1 && currentStepX === 0 && currentStepY === -1) {
    setTailWavesAmplitude(steps, [waveAmplitude, 0])
    TAIL.setTailAnimatingQueue('rightDown')
  }
  if (previousStepY === 1 && currentStepY === 0 && currentStepX === 1) {
    setTailWavesAmplitude(steps, [0, waveAmplitude])
    TAIL.setTailAnimatingQueue('upRight')
  }
  if (previousStepY === 1 && currentStepY === 0 && currentStepX === -1) {
    setTailWavesAmplitude(steps, [0, -waveAmplitude])
    TAIL.setTailAnimatingQueue('upLeft')
  }
  if (previousStepY === -1 && currentStepY === 0 && currentStepX === 1) {
    setTailWavesAmplitude(steps, [0, waveAmplitude])
    TAIL.setTailAnimatingQueue('downRight')
  }
  if (previousStepY === -1 && currentStepY === 0 && currentStepX === -1) {
    setTailWavesAmplitude(steps, [0, -waveAmplitude])
    TAIL.setTailAnimatingQueue('downLeft')
  }
}
