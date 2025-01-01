import { Vector3 } from '@react-three/fiber'

export interface AnimationStepProps {
  position: number[]
  rotation: number[]
  scale: number[]
}

export interface AnimationStep {
  name: string
  step: number
}

export interface AnimationProps extends AnimationStep, AnimationStepProps {}
