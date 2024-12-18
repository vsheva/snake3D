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
    {
      name: 'turn-left',
      step: 18,
      position: [-1, 1, 0],
      rotation: [0, 0, -11],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-left',
      step: 0,
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-left',
      step: 1,
      position: [-0.0225, 0.055, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-left',
      step: 2,
      position: [-0.0225, 0.055, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-left',
      step: 3,
      position: [-0.055, 0.11, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-left',
      step: 4,
      position: [-0.055, 0.11, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-left',
      step: 5,
      position: [-0.0775, 0.165, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-left',
      step: 6,
      position: [-0.0775, 0.165, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-left',
      step: 7,
      position: [-0.1, 0.221, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-left',
      step: 8,
      position: [-0.1, 0.221, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-left',
      step: 9,
      position: [-0.1225, 0.276, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-left',
      step: 10,
      position: [-0.1225, 0.276, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-left',
      step: 11,
      position: [-0.155, 0.331, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-left',
      step: 12,
      position: [-0.155, 0.331, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-left',
      step: 13,
      position: [-0.1775, 0.386, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-left',
      step: 14,
      position: [-0.1775, 0.386, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-left',
      step: 15,
      position: [-0.2, 0.441, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-left',
      step: 16,
      position: [-0.2, 0.441, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-left',
      step: 17,
      position: [-0.2225, 0.496, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-left',
      step: 18,
      position: [-0.2225, 0.496, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-left',
      step: 19,
      position: [-0.2, 0.551, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-left',
      step: 20,
      position: [-0.2, 0.551, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-left',
      step: 21,
      position: [-0.1775, 0.606, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-left',
      step: 22,
      position: [-0.1775, 0.606, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-left',
      step: 23,
      position: [-0.155, 0.661, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-left',
      step: 24,
      position: [-0.155, 0.661, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-left',
      step: 25,
      position: [-0.1225, 0.716, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-left',
      step: 26,
      position: [-0.1225, 0.716, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-left',
      step: 27,
      position: [-0.1, 0.771, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-left',
      step: 28,
      position: [-0.1, 0.771, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-left',
      step: 29,
      position: [-0.0775, 0.826, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-left',
      step: 30,
      position: [-0.0775, 0.826, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-left',
      step: 31,
      position: [-0.055, 0.881, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-left',
      step: 32,
      position: [-0.055, 0.881, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-left',
      step: 33,
      position: [-0.0225, 0.936, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-left',
      step: 34,
      position: [-0.0225, 0.936, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-left',
      step: 35,
      position: [0, 1, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-left',
      step: 36,
      position: [0, 1, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-left',
      step: 37,
      position: [0, 1, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-right',
      step: 0,
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-right',
      step: 1,
      position: [0.0225, 0.055, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-right',
      step: 2,
      position: [0.0225, 0.055, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-right',
      step: 3,
      position: [0.055, 0.11, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-right',
      step: 4,
      position: [0.055, 0.11, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-right',
      step: 5,
      position: [0.0775, 0.165, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-right',
      step: 6,
      position: [0.0775, 0.165, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-right',
      step: 7,
      position: [0.1, 0.221, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-right',
      step: 8,
      position: [0.1, 0.221, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-right',
      step: 9,
      position: [0.1225, 0.276, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-right',
      step: 10,
      position: [0.1225, 0.276, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-right',
      step: 11,
      position: [0.155, 0.331, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-right',
      step: 12,
      position: [0.155, 0.331, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-right',
      step: 13,
      position: [0.1775, 0.386, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-right',
      step: 14,
      position: [0.1775, 0.386, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-right',
      step: 15,
      position: [0.2, 0.441, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-right',
      step: 16,
      position: [0.2, 0.441, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-right',
      step: 17,
      position: [0.2225, 0.496, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-right',
      step: 18,
      position: [0.2225, 0.496, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-right',
      step: 19,
      position: [0.2, 0.551, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-right',
      step: 20,
      position: [0.2, 0.551, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-right',
      step: 21,
      position: [0.1775, 0.606, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-right',
      step: 22,
      position: [0.1775, 0.606, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-right',
      step: 23,
      position: [0.155, 0.661, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-right',
      step: 24,
      position: [0.155, 0.661, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-right',
      step: 25,
      position: [0.1225, 0.716, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-right',
      step: 26,
      position: [0.1225, 0.716, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-right',
      step: 27,
      position: [0.1, 0.771, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-right',
      step: 28,
      position: [0.1, 0.771, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-right',
      step: 29,
      position: [0.0775, 0.826, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-right',
      step: 30,
      position: [0.0775, 0.826, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-right',
      step: 31,
      position: [0.055, 0.881, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-right',
      step: 32,
      position: [0.055, 0.881, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-right',
      step: 33,
      position: [0.0225, 0.936, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-right',
      step: 34,
      position: [0.0225, 0.936, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-right',
      step: 35,
      position: [0, 1, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-right',
      step: 36,
      position: [0, 1, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'move-up-right',
      step: 37,
      position: [0, 1, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
  ]
  const output: AnimationStepProps = animations.filter(
    (animation) => animation.name === name && animation.step === step
  )[0]

  return output
}
