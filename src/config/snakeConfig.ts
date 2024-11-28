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
        position: new Vector3(0, 0, 0.25),
        'rotation-x': 0,
        'rotation-y': 0,
        'rotation-z': 54.98,
        scale: 0.4,
      },
      eyes: <GeometryProps>{
        position: new Vector3(0, 0.06, 0.785),
        'rotation-x': 23.3,
        'rotation-y': 0,
        'rotation-z': 54.98,
        scale: 0.4,
      },
      jaw: <GeometryProps>{
        position: new Vector3(0, 0.11, 0.11),
        'rotation-x': -0.05,
        'rotation-y': 0,
        'rotation-z': 54.98,
        scale: 0.4,
      },
      tongue: <GeometryProps>{
        position: new Vector3(0, 0.35, 0.23),
        'rotation-x': 0,
        'rotation-y': 0,
        'rotation-z': 22,
        scale: 0.2,
      },
    },
  },
  snakeTAIL: {
    shape: <GeometryProps>{
      position: new Vector3(0, -1.05, 0.05),
      'rotation-x': 0,
      'rotation-y': 0,
      'rotation-z': 11,
      scale: 0.8,
    },
  },
}
