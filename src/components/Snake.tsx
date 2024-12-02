import { useControls } from 'leva'
import snakeBodyUnit from '../assets/snakeModel/snakeBody/snakeBodyUnit'
import SnakeTail from '../assets/snakeModel/snakeTail/SnakeTail'
import SnakeHead from '../assets/snakeModel/snakeHead/SnakeHead'
import { useRef } from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import SnakeBodyUnit from '../assets/snakeModel/snakeBody/snakeBodyUnit'

const Snake /*: React.FC<SnakeProps>*/ = () => {
  const { camera } = useThree()
  const { position_x, position_y, rotation_z } = useControls({
    position_x: 0,
    position_y: 0,
    rotation_z: 0,
  })
  const groupRef = useRef<THREE.Group>(null)
  let positionY = 0
  let speed = 2
  useFrame((_, delta) => {
    if (groupRef.current) {
      if (positionY > 15) speed = 0
      camera.position.y = camera.position.y + speed * delta
      // console.log(camera.position)
      camera.updateProjectionMatrix()
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
      <SnakeBodyUnit />
      <SnakeTail />
    </group>
  )
}

export default Snake
