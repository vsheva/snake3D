import { Vector3 } from 'three'
import * as TYPES from '../../../../types/threeTypes'

const snakePrismaRightTransition: TYPES.GeometryTransitionProps = {
  position: [0, 0, 0],
  rotation: [0, 0, 11],
  scale: 1,
}

export const snakePrismaRIGHT: TYPES.GeometryProps = {
  position: new Vector3(
    snakePrismaRightTransition.position[0],
    -0.94 + snakePrismaRightTransition.position[1],
    0.5 + snakePrismaRightTransition.position[2]
  ),
  'rotation-x': 0 + snakePrismaRightTransition.rotation[0],
  'rotation-y': 22 + snakePrismaRightTransition.rotation[1],
  'rotation-z': 22 + snakePrismaRightTransition.rotation[2],
  scale: 0.9 * snakePrismaRightTransition.scale,
}

export const setPrismaLEFT = (prisma: TYPES.GeometryTransitionProps): void => {
  snakePrismaRightTransition.position = prisma.position
  snakePrismaRightTransition.rotation = prisma.rotation
  snakePrismaRightTransition.scale = prisma.scale
}
