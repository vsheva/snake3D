import { AnimationStepProps } from '../types/animationTypes'

const snakeTransitionProps: AnimationStepProps = {
  name: 'transition',
  step: 0,
  position: [0, 0, 0],
  rotation: [0, 0, 0],
  scale: [1, 1, 1],
}

export const setSnakeTransitionProps = (props: AnimationStepProps): void => {
  snakeTransitionProps.position = props.position
  snakeTransitionProps.rotation = props.rotation
  snakeTransitionProps.scale = props.scale
}

export const getSnakeTransitionProps = (): AnimationStepProps => {
  return snakeTransitionProps
}
