import { useFrame } from '@react-three/fiber'
import * as SNAKE from '../../../engine/snake/snake'
import SnakeHead from '../snakeHead/SnakeHead'
import setSnakeHeadProps from './snakeSettingUpHead/setSnakeHeadProps'
import { useRef } from 'react'
import * as THREE from 'three'

export const SnakeSettingUp = () => {
  const snakeHeadRef = useRef<THREE.Group>(null)
  const snakeBodyPosition: number[][] = [[0, 0]]
  useFrame(() => {
    snakeBodyPosition.length = 0
    for (let i = 1; i < SNAKE.getSnakeBodyCoord().length; i++) {
      snakeBodyPosition.push([
        SNAKE.getSnakeBodyCoord()[i][0] - SNAKE.getSnakeBodyCoord()[0][0],
        SNAKE.getSnakeBodyCoord()[i][1] - SNAKE.getSnakeBodyCoord()[0][1],
      ])
      if (snakeHeadRef.current) {
        // snakeHeadRef.current.rotation.set(
        //   setSnakeHeadProps()['rotation-x'],
        //   setSnakeHeadProps()['rotation-y'],
        //   setSnakeHeadProps()['rotation-z']
        // )
      }
    }
  })

  return (
    <group>
      {SNAKE.getSnakeBodyCoord().map((_, index) => {
        if (snakeBodyPosition[index] !== undefined) {
          return (
            <group key={index * Math.random()} ref={snakeHeadRef}>
              {index === 0 && <SnakeHead />}
            </group>
          )
        }
      })}
    </group>
  )
}
