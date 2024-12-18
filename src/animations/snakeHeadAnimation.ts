import { AnimationStepProps } from '../types/animationTypes'

export const snakeHeadAnimation = (name: string, step: number): AnimationStepProps => {
  const animations: AnimationStepProps[] = [
    {
      name: 'turn-right',
      step: 0,
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'turn-right',
      step: 1,
      position: [0, 0, 0.1],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'turn-right',
      step: 2,
      position: [0, 0, 0.1],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'turn-right',
      step: 3,
      position: [0, 0, 0.2],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'turn-right',
      step: 4,
      position: [0, 0, 0.2],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'turn-right',
      step: 5,
      position: [0, 0, 0.8],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'turn-right',
      step: 6,
      position: [0, 0, 0.8],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'turn-right',
      step: 7,
      position: [0, 0, 1],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'turn-right',
      step: 8,
      position: [0, 0, 1],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'turn-right',
      step: 9,
      position: [0.2, 0.2, 1],
      rotation: [0, 0, 5],
      scale: [1, 1, 1],
    },
    {
      name: 'turn-right',
      step: 10,
      position: [0.2, 0.2, 1],
      rotation: [0, 0, 5],
      scale: [1, 1, 1],
    },
    {
      name: 'turn-right',
      step: 11,
      position: [0.4, 0.4, 1],
      rotation: [0, 0, 11],
      scale: [1, 1, 1],
    },
    {
      name: 'turn-right',
      step: 12,
      position: [0.4, 0.4, 1],
      rotation: [0, 0, 11],
      scale: [1, 1, 1],
    },
    {
      name: 'turn-right',
      step: 13,
      position: [0.6, 0.6, 0.8],
      rotation: [0, 0, 11],
      scale: [1, 1, 1],
    },
    {
      name: 'turn-right',
      step: 14,
      position: [0.6, 0.6, 0.8],
      rotation: [0, 0, 11],
      scale: [1, 1, 1],
    },
    {
      name: 'turn-right',
      step: 15,
      position: [0.8, 0.8, 0.2],
      rotation: [0, 0, 11],
      scale: [1, 1, 1],
    },
    {
      name: 'turn-right',
      step: 16,
      position: [0.8, 0.8, 0.2],
      rotation: [0, 0, 11],
      scale: [1, 1, 1],
    },
    {
      name: 'turn-right',
      step: 17,
      position: [1, 1, 0],
      rotation: [0, 0, 11],
      scale: [1, 1, 1],
    },
    {
      name: 'turn-right',
      step: 18,
      position: [1, 1, 0],
      rotation: [0, 0, 11],
      scale: [1, 1, 1],
    },
    {
      name: 'turn-left',
      step: 0,
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'turn-left',
      step: 1,
      position: [0, 0, 0.1],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'turn-left',
      step: 2,
      position: [0, 0, 0.1],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'turn-left',
      step: 3,
      position: [0, 0, 0.2],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'turn-left',
      step: 4,
      position: [0, 0, 0.2],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'turn-left',
      step: 5,
      position: [0, 0, 0.8],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'turn-left',
      step: 6,
      position: [0, 0, 0.8],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'turn-left',
      step: 7,
      position: [0, 0, 1],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'turn-left',
      step: 8,
      position: [0, 0, 1],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'turn-left',
      step: 9,
      position: [-0.2, 0.2, 1],
      rotation: [0, 0, -5],
      scale: [1, 1, 1],
    },
    {
      name: 'turn-left',
      step: 10,
      position: [-0.2, 0.2, 1],
      rotation: [0, 0, -5],
      scale: [1, 1, 1],
    },
    {
      name: 'turn-left',
      step: 11,
      position: [-0.4, 0.4, 1],
      rotation: [0, 0, -11],
      scale: [1, 1, 1],
    },
    {
      name: 'turn-left',
      step: 12,
      position: [-0.4, 0.4, 1],
      rotation: [0, 0, -11],
      scale: [1, 1, 1],
    },
    {
      name: 'turn-left',
      step: 13,
      position: [-0.6, 0.6, 0.8],
      rotation: [0, 0, -11],
      scale: [1, 1, 1],
    },
    {
      name: 'turn-left',
      step: 14,
      position: [-0.6, 0.6, 0.8],
      rotation: [0, 0, -11],
      scale: [1, 1, 1],
    },
    {
      name: 'turn-left',
      step: 15,
      position: [-0.8, 0.8, 0.2],
      rotation: [0, 0, -11],
      scale: [1, 1, 1],
    },
    {
      name: 'turn-left',
      step: 16,
      position: [-0.8, 0.8, 0.2],
      rotation: [0, 0, -11],
      scale: [1, 1, 1],
    },
    {
      name: 'turn-left',
      step: 17,
      position: [-1, 1, 0],
      rotation: [0, 0, -11],
      scale: [1, 1, 1],
    },
  ]
  const output: AnimationStepProps = animations.filter(
    (animation) => animation.name === name && animation.step === step
  )[0]

  return output
}
