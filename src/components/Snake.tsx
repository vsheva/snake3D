import SnakeTail from '../assets/snakeModel/snakeTail/SnakeTail'
import SnakeHead from '../assets/snakeModel/snakeHead/SnakeHead'
import { useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import SnakeBodyUnit from '../assets/snakeModel/snakeBody/snakeBodyUnit'
import {
  getSnakeBodyCoord,
  getSnakeHeadParams,
  setSnakeHeadParams,
} from '../engine/snake/snake'
import { setSnakePosition } from '../engine/snake/setSnakePosition'
import getSnakeMoveDirection from '../engine/snake/getSnakeMoveDirection'

export const Snake = () => {
  const groupRef = useRef<THREE.Group>(null)
  let [positionY, positionX, rotationZ, counterX, counterY] = [0, 0, 0, 0, 0]
  let previousStepX = 0
  let previousStepY = 0
  useFrame((_, delta) => {
    if (groupRef.current) {
      let currentStepX = getSnakeHeadParams().snakeHeadStepX
      let currentStepY = getSnakeHeadParams().snakeHeadStepY
      // counterX = counterX + snakeStepX * delta
      // counterY = counterY + snakeStepY * delta
      // setSnakePosition({
      //   counterX,
      //   counterY,
      // })
      if (previousStepX === -1 && currentStepX === 0) positionX = Math.floor(positionX)
      if (previousStepX === 1 && currentStepX === 0) positionX = Math.ceil(positionX)
      if (previousStepY === -1 && currentStepY === 0) positionY = Math.floor(positionY)
      if (previousStepY === 1 && currentStepY === 0) positionY = Math.ceil(positionY)
      if (previousStepX === 0 && currentStepX === 1) {
        rotationZ = 11
        positionY = Math.ceil(positionY)
      }
      if (previousStepX === 0 && currentStepX === -1) {
        rotationZ = 33
        positionY = Math.floor(positionY)
      }
      if (previousStepY === 0 && currentStepY === -1) {
        rotationZ = 22
        positionX = Math.floor(positionX)
      }
      if (previousStepY === 0 && currentStepY === 1) {
        rotationZ = 0
        positionX = Math.ceil(positionX)
      }

      previousStepX = currentStepX
      previousStepY = currentStepY
      positionX = positionX + currentStepX * delta
      positionY = positionY + currentStepY * delta
      groupRef.current.position.set(positionX, positionY, 0)
      groupRef.current.rotation.set(0, 0, rotationZ)
    }
  })

  return (
    <group ref={groupRef}>
      <SnakeHead />
      {/*<SnakeBodyUnit />
      <SnakeTail /> */}
    </group>
  )
}
