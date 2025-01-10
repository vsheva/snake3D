import { getCounterHead } from './snakeHeadLocation'
import { snakeSteps } from '../../../types/animationTypes'
import { snakeANIMATION } from '../../../config/snakeConfig/snakeANIMATION/snakeANIMATION'
import { checkTimerWorking } from '../../../engine/time/isTimer'

const headWave = [0, 0]

let side = 1
let doubleSide = 1
let dta = 0
export const setHeadWave = (steps: snakeSteps) => {
  const [counterHeadX, counterHeadY] = getCounterHead()
  const { currentStepX, currentStepY } = steps
  const { waveAmplitude } = snakeANIMATION
  if (checkTimerWorking()) {
    if (counterHeadX === 0 && currentStepX === 0 && currentStepY !== 0) {
      side = counterHeadY === 0 ? side * -1 : side
      dta = side > 0 ? Math.abs(counterHeadY) : 1 - Math.abs(counterHeadY)
      doubleSide =
        Math.abs(counterHeadY) === 0 && Math.round(dta) === 0
          ? doubleSide * -1
          : doubleSide
      headWave[0] = doubleSide * Math.sin(dta) * waveAmplitude
      headWave[1] = 0
    }
    if (counterHeadY === 0 && currentStepY === 0 && currentStepX !== 0) {
      side = counterHeadX === 0 ? side * -1 : side
      dta = side > 0 ? Math.abs(counterHeadX) : 1 - Math.abs(counterHeadX)
      doubleSide =
        Math.abs(counterHeadX) === 0 && Math.round(dta) === 0
          ? doubleSide * -1
          : doubleSide
      headWave[0] = 0
      headWave[1] = doubleSide * Math.sin(dta) * waveAmplitude
    }
  }
}

export const getHeadWave = () => {
  return headWave
}
