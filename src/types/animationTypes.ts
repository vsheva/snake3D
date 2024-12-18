import { Vector3 } from '@react-three/fiber'

export interface AnimationProps {
  name: string
  step: number
}

export interface AnimationStepProps extends AnimationProps {
  position: number[]
  rotation: number[]
  scale: number[]
}
