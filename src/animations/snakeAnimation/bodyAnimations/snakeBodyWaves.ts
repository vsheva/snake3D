import { snakeLength } from '../../../components/Snake'
import { getHeadWave } from '../headAnimations/snakeHeadWaves'

const bodyWaves: number[][] = []

export const snakeBodyWaves = () => {
  bodyWaves.length = 0
  const headWave = getHeadWave()
  snakeLength.forEach((_, index) => {
    bodyWaves.push([
      -headWave[0] * Math.sin(index * 1.57),
      -headWave[1] * Math.sin(index * 1.57),
    ])
  })
}

export const getBodyWaves = () => bodyWaves
