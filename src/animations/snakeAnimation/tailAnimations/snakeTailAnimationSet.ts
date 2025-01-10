import { snakeTailANIMATION } from '../../../config/snakeConfig/snakeANIMATION/snakeTAIL/snakeTailAnimation'
import { AnimationStep } from '../../../types/animationTypes'
import { snakeTailAnimation } from './snakeTailAnimation'

let tailAnimationQueue: AnimationStep[] = []
let tailAnimationCounter = 0
let isTailAnimating = false

export const setIsTailAnimating = (tailAnimating: boolean) => {
  isTailAnimating = tailAnimating
}

export const setTailAnimatingQueue = (animationName: string) => {
  tailAnimationQueue.shift()
  tailAnimationCounter = 0
  tailAnimationQueue.push({ name: animationName, step: snakeTailANIMATION.steps })
  setIsTailAnimating(true)
}

export const getTailAnimatingQueue = () => {
  return tailAnimationQueue
}

export const getTailAnimatingCounter = () => {
  return tailAnimationCounter
}

export const getIsTailAnimating = () => {
  return isTailAnimating
}

export const setTailAnimation = () => {
  const { position, rotation, scale } = snakeTailAnimation(
    tailAnimationQueue[0].name,
    tailAnimationCounter
  )
  tailAnimationCounter++
  if (tailAnimationCounter > tailAnimationQueue[0].step) {
    tailAnimationQueue.shift()
    tailAnimationCounter = 0
    setIsTailAnimating(false)
  }

  return { position, rotation, scale }
}
