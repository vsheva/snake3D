import { snakeEYES } from './snakeEYES/snakeEYES'
import { snakeSCULL } from './snakeSCULL'
import { snakeJAW } from './snakeJAW'
import { snakeTONGUE } from './snakeTONGUE'
import { GeometryProps } from '../../../../types/threeTypes'
import { Vector3 } from 'three'

export const snakeHEAD = {
  head: <GeometryProps>{
    position: new Vector3(0, -0.06, 0),
    'rotation-x': 0,
    'rotation-y': 0,
    'rotation-z': 0,
    scale: 1,
  },
  eyes: snakeEYES,
  scull: snakeSCULL,
  jaw: snakeJAW,
  tongue: snakeTONGUE,
}
