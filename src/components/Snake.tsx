import { useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import SnakeHead from '../assets/snakeModel/snakeHead/SnakeHead'
import SnakeTail from '../assets/snakeModel/snakeTail/SnakeTail'
import React from 'react'

/**
 * Компонент Snake рендерит 3D-модель змеи, состоящую из головы и хвоста.
 */
const Snake = () => {
  const headRef = useRef<THREE.Group>(null)
  const tailRef = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    if (headRef.current) {
      headRef.current.rotation.z = Math.sin(state.clock.elapsedTime * -2) * 0.2
    }

    if (tailRef.current) {
      tailRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 2) * 0.2
    }
  })

  return (
    <group>
      <group ref={headRef}>
        <SnakeHead />
      </group>
      <group ref={tailRef}>
        <SnakeTail />
      </group>
    </group>
  )
}

export default React.memo(Snake)
