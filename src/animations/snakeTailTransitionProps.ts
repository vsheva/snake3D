import { AnimationStepProps } from '../types/animationTypes'

const snakeTailTransitionProps: AnimationStepProps = {
  position: [0, 0, 0],
  rotation: [0, 0, 0],
  scale: [1, 1, 1],
}

export const setSnakeTailTransitionProps = (props: AnimationStepProps): void => {
  snakeTailTransitionProps.position = props.position
  snakeTailTransitionProps.rotation = props.rotation
  snakeTailTransitionProps.scale = props.scale
}

export const getSnakeTailTransitionProps = (): AnimationStepProps => {
  return snakeTailTransitionProps
}
