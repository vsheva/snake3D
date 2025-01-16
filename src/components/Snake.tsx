import SnakeTail from '../assets/snakeModel/snakeTail/SnakeTail'
import SnakeHead from '../assets/snakeModel/snakeHead/SnakeHead'
import { useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import checkTimerStep from '../engine/time/checkTimerStep'
import { snakeAnimation } from '../animations/snakeAnimation/snakeAnimation'
import * as HEAD from '../animations/snakeAnimation/headAnimations/snakeHeadProps'
import { getHeadWave } from '../animations/snakeAnimation/headAnimations/snakeHeadWaves'
import { getTailMove } from '../animations/snakeAnimation/tailAnimations/snakeTailWaves'
import * as TAIL from '../animations/snakeAnimation/tailAnimations/snakeTailAnimationSet'
import SnakeBodyUnit from '../assets/snakeModel/snakeBody/snakeBodyUnit'

const snakeLength: number[] = [1, 2, 3, 4, 5]

export const Snake = () => {
  const headRef = useRef<THREE.Group>(null)
  const tailRef = useRef<THREE.Group>(null)
  const bodyRef = snakeLength.map(() => useRef<THREE.Group>(null))
  let tailGap = 0
  useFrame((_, delta) => {
    snakeAnimation(delta)
    tailGap = snakeLength.length - 0.1
    if (!checkTimerStep()) {
      if (headRef.current) {
        headRef.current.position.set(
          HEAD.getPositionHead()[0] + getHeadWave()[0],
          HEAD.getPositionHead()[1] + getHeadWave()[1],
          0
        )
        headRef.current.rotation.set(0, 0, HEAD.getRotationHead()[2])
      }
      snakeLength.forEach((_, index) => {
        if (bodyRef[index].current) {
          bodyRef[index].current.position.set(0, -index - 2 * (index % 2), 0)
          bodyRef[index].current.rotation.set(0, 0, 3.14 * (index % 2))
        }
      })
      if (tailRef.current) {
        if (TAIL.getIsTailAnimating() && TAIL.getTailAnimatingQueue().length > 0) {
          const { position, rotation, scale } = TAIL.setTailAnimation()
          tailRef.current.position.set(
            position[0] + getTailMove()[0],
            position[1] - tailGap + getTailMove()[1],
            position[2]
          )
          tailRef.current.rotation.set(rotation[0], rotation[1], rotation[2])
          tailRef.current.scale.set(scale[0], scale[1], scale[2])
        } else {
          tailRef.current.position.set(getTailMove()[0], getTailMove()[1] - tailGap, 0)
        }
      }
    }
  })

  return (
    <group ref={headRef}>
      <SnakeHead />
      {snakeLength.map((_, index) => (
        <group ref={bodyRef[index]}>
          <SnakeBodyUnit />
        </group>
      ))}
      <group ref={tailRef}>
        <SnakeTail />
      </group>
    </group>
  )
}
