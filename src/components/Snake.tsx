import { useControls } from 'leva'
import * as PRISMA from '../assets/snakeModel/snakeBody/snakeBodyPrisma'
import SnakeTrail from '../assets/snakeModel/snakeTail/snakeTail'
import SnakeHead from '../assets/snakeModel/snakeHead/SnakeHead'
import { useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

const Snake /*: React.FC<SnakeProps>*/ = () => {
  const { position_x, position_y, rotation_z } = useControls({
    position_x: 0,
    position_y: 0,
    rotation_z: 0,
  })
  const groupRef = useRef<THREE.Group>(null)
  let positionY = 0
  useFrame((_, delta) => {
    if (groupRef.current) {
      const speed = -1
      positionY = positionY + speed * delta
      groupRef.current.position.set(0, positionY, 0)
    }
  })

  return (
    <group
      ref={groupRef}
      position={[position_x, position_y, 0]}
      rotation={[0, 0, rotation_z]}
    >
      <SnakeHead />
      {/* <PRISMA.SnakeBodyRightPrisma />
      <PRISMA.SnakeBodyLeftPrisma />*/}
      <SnakeTrail />
    </group>
  )
}

export default Snake
