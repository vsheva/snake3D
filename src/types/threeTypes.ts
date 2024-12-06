import { Vector3 } from '@react-three/fiber'

export interface GeometryProps {
  position: Vector3
  'rotation-x': number
  'rotation-y': number
  'rotation-z': number
  scale: number
}

export interface CameraProps {
  fov: number
  near: number
  far: number
  aspect: number
  position: number[]
  rotation: number[]
  zoom: number
}
