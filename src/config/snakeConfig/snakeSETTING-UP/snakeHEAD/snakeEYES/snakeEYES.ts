import { Vector3 } from 'three'
import { GeometryProps } from '../../../../../types/threeTypes'
import { snakeAPPLE } from './snakeAPPLE'
import { snakePUPIL } from './snakePUPIL'

export const snakeEYES = {
  eyes: <GeometryProps>{
    position: new Vector3(0, 0.06, 0.785),
    'rotation-x': 23.3,
    'rotation-y': 0,
    'rotation-z': 54.98,
    scale: 0.4,
  },
  apple: snakeAPPLE,
  pupil: snakePUPIL,
}
