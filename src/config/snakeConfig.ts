import { Vector3 } from 'three'
import { GeometryProps } from '../types/threeTypes'

export const snakeCONFIG = {
  snakeFirstCOLOR: '#44abda',
  snakeSecondCOLOR: '#fedc32',
  snakeOPACITY: 1,
  snakeEYES: {
    apple: {
      color: 'white',
      position: [32, 32],
      radius: 0.15,
    },
    pupil: {
      color: 'red',
      position: [32, 32],
      radius: 0.05,
    },
  },
  snakeMOUTH: {
    upperPalate: {
      color: 'red',
    },
    tongue: {
      color: 'red',
    },
  },
  snakeHEAD: {
    shape: {
      scull: <GeometryProps>{
        position: new Vector3(0.055, -0.1, 0),
        'rotation-x': 0,
        'rotation-y': 0,
        'rotation-z': 55,
        scale: 0.4,
      },
      eyes: <GeometryProps>{
        position: new Vector3(0.05, 0.04, -0.54),
        'rotation-x': 23,
        'rotation-y': 0.04,
        'rotation-z': 55,
        scale: 0.4,
      },
      jaw: <GeometryProps>{
        position: new Vector3(0.07, 0.005, 0.14),
        'rotation-x': 0,
        'rotation-y': 0,
        'rotation-z': 54.95,
        scale: 0.4,
      },
      tongue: <GeometryProps>{
        position: new Vector3(0.05, 0.2, 0),
        'rotation-x': 0,
        'rotation-y': 0,
        'rotation-z': 22,
        scale: 0.2,
      },
    },
  },
  snakeTAIL: {
    shape: <GeometryProps>{
      position: new Vector3(0, 0, 0),
      'rotation-x': 0,
      'rotation-y': 0,
      'rotation-z': 11,
      scale: 1,
    },
  },
}
