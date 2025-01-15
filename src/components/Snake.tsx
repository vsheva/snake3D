import SnakeTail from '../assets/snakeModel/snakeTail/SnakeTail'
import SnakeHead from '../assets/snakeModel/snakeHead/SnakeHead'
import { useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { GeometryProps } from '../types/threeTypes'
import checkTimerStep from '../engine/time/checkTimerStep'
import { snakeAnimation } from '../animations/snakeAnimation/snakeAnimation'
import * as HEAD from '../animations/snakeAnimation/headAnimations/snakeHeadProps'
import { getHeadWave } from '../animations/snakeAnimation/headAnimations/snakeHeadWaves'
import { getTailMove } from '../animations/snakeAnimation/tailAnimations/snakeTailWaves'
import * as TAIL from '../animations/snakeAnimation/tailAnimations/snakeTailAnimationSet'
import SnakeBodyUnit from '../assets/snakeModel/snakeBody/snakeBodyUnit'

export const Snake = () => {
  const headRef = useRef<THREE.Group>(null)
  const tailRef = useRef<THREE.Group>(null)
  let tailProps: GeometryProps = {
    position: new THREE.Vector3(0, 0.9, 0),
    'rotation-x': 0,
    'rotation-y': 0,
    'rotation-z': 0,
    scale: 1,
  }
  useFrame((_, delta) => {
    snakeAnimation(delta)
    if (!checkTimerStep()) {
      if (headRef.current) {
        headRef.current.position.set(
          HEAD.getPositionHead()[0] + getHeadWave()[0],
          HEAD.getPositionHead()[1] + getHeadWave()[1],
          0
        )
        headRef.current.rotation.set(0, 0, HEAD.getRotationHead()[2])
      }
      if (tailRef.current) {
        if (TAIL.getIsTailAnimating() && TAIL.getTailAnimatingQueue().length > 0) {
          const { position, rotation, scale } = TAIL.setTailAnimation()
          tailRef.current.position.set(
            position[0] + getTailMove()[0],
            position[1] + getTailMove()[1],
            position[2]
          )
          tailRef.current.rotation.set(rotation[0], rotation[1], rotation[2])
          tailRef.current.scale.set(scale[0], scale[1], scale[2])
        } else {
          tailRef.current.position.set(getTailMove()[0], getTailMove()[1], 0)
        }
      }
    }
  })

  return (
    <group ref={headRef}>
      <SnakeHead />
      {/* <SnakeBodyUnit /> */}
      <group ref={tailRef}>
        <SnakeTail {...tailProps} />
      </group>
    </group>
  )
}
