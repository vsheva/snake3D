import { snakeLength } from '../../../components/Snake'
import { snakeSteps } from '../../../types/animationTypes'
import { getHeadWave } from '../headAnimations/snakeHeadWaves'

const bodyWaves: number[][] = []

export const snakeBodyWaves = (steps: snakeSteps) => {
  bodyWaves.length = 0
  const headWave = getHeadWave()
  const xDirection = steps.currentStepY >= 0 ? 1 : -1
  const yDirection = steps.currentStepX >= 0 ? -1 : 1
  snakeLength.forEach((_, index) => {
    if (headWave[1] === 0) {
      bodyWaves.push([
        headWave[0] * Math.sin((index + 1) * 1.57) * xDirection,
        headWave[1] * Math.sin((index + 1) * 1.57) * yDirection,
      ])
    } else {
      bodyWaves.push([
        headWave[1] * Math.sin((index + 1) * 1.57) * yDirection,
        headWave[0] * Math.sin((index + 1) * 1.57) * xDirection,
      ])
    }
  })
}

export const getBodyWaves = () => bodyWaves
