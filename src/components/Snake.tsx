import { useControls } from 'leva'
import SnakeTail from '../assets/snakeModel/snakeTail/SnakeTail'
import SnakeHead from '../assets/snakeModel/snakeHead/SnakeHead'
import { useRef } from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import SnakeBodyUnit from '../assets/snakeModel/snakeBody/snakeBodyUnit'

const Snake = () => {
  const { rotation_z } = useControls({
    rotation_z: 1.57,
  })
  const groupRef = useRef<THREE.Group>(null)
  let positionY = 0
  let positionX = 0
  let speed = 0
  useFrame((_, delta) => {
    if (groupRef.current) {
      if (Math.abs(positionY) > 15) speed = 0
      if (Math.abs(positionX) > 15) speed = 0
      // positionY = positionY + speed * delta
      positionX = positionX + speed * delta
      groupRef.current.position.set(positionX, positionY, 0)
    }
  })

  return (
    <group ref={groupRef} rotation={[0, 0, rotation_z]}>
      <SnakeHead />
      <SnakeBodyUnit />
      <SnakeTail />
    </group>
  )
}

export default Snake
