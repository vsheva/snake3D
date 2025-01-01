import { AnimationStepProps } from '../types/animationTypes'

const snakeHeadTransitionProps: AnimationStepProps = {
  position: [0, 0, 0],
  rotation: [0, 0, 0],
  scale: [1, 1, 1],
}

export const setSnakeHeadTransitionProps = (props: AnimationStepProps): void => {
  snakeHeadTransitionProps.position = props.position
  snakeHeadTransitionProps.rotation = props.rotation
  snakeHeadTransitionProps.scale = props.scale
}

export const getSnakeHeadTransitionProps = (): AnimationStepProps => {
  return snakeHeadTransitionProps
}
