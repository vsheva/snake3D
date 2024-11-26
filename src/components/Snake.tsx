import * as PRISMA from '../assets/snakeModel/snakeBody/snakeBodyPrisma'
import SnakeTrail from '../assets/snakeModel/snakeTail/snakeTail'
import SnakeHead from '../assets/snakeModel/snakeHead/SnakeHead'
import { useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

const Snake /*: React.FC<SnakeProps>*/ = () => {
  const groupRef = useRef<THREE.Group>(null)
  let positionY = 0
  useFrame((_, delta) => {
    if (groupRef.current) {
      const speed = 0
      positionY = positionY + speed * delta
      groupRef.current.position.set(0, positionY, 0)
    }
  })

  return (
    <group ref={groupRef}>
      <SnakeHead />
      {/* <PRISMA.SnakeBodyRightPrisma />
      <PRISMA.SnakeBodyLeftPrisma />
      <SnakeTrail /> */}
    </group>
  )
}

export default Snake
