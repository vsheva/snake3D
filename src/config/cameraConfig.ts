import { CameraProps } from '../types/threeTypes'

export const cameraCONFIG: CameraProps = {
  fov: 55,
  near: 0.1,
  far: 200,
  aspect: window.innerWidth / window.innerHeight,
  position: [0, -25, 25],
  rotation: [0.8, 0, 0],
  zoom: 2,
}
