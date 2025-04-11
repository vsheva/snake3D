import { useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import SnakeHead from '../assets/snakeModel/snakeHead/SnakeHead'
import SnakeTail from '../assets/snakeModel/snakeTail/SnakeTail'
import React from 'react'
import { snakeAnimation } from '../animations/snakeAnimation/snakeAnimation'
import { getCounterHead } from '../animations/snakeAnimation/headAnimations/snakeHeadLocation'
import { getSnakeBodyCoord, getSnakeHeadParams } from '../engine/snake/snake'
import SnakeBodyUnit from '../assets/snakeModel/snakeBody/snakeBodyUnit'
import { getAmountOfFood } from '../engine/food/amountOfFoodPerLevel'
import checkTimerStep from '../engine/time/checkTimerStep'
import { getSnakeUnitPosition } from '../animations/snakeAnimation/bodyAnimations/snakeBodyProps'
import { getDiff } from '../animations/snakeAnimation/bodyAnimations/snakeDiff'

/**
 * Компонент Snake рендерит 3D-модель змеи, состоящую из головы, тела и хвоста.
 */
const Snake = () => {
  let snake = Array(getSnakeBodyCoord().length).fill([])
  const headRef = useRef<THREE.Group>(null)
  const bodyRefs = useRef<Array<React.RefObject<THREE.Group>>>(
    Array(getAmountOfFood())
      .fill(null)
      .map(() => useRef<THREE.Group>(null))
  )
  const tailRef = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    snakeAnimation(delta)

    //**********КОНТРОЛЬ************************

    // const [counterHeadX, counterHeadY] = getCounterHead()
    // if (counterHeadX === 0 && counterHeadY === 0) {
    //   if (
    //     getSnakeHeadParams().snakeHeadStepX !== 0 ||
    //     getSnakeHeadParams().snakeHeadStepY !== 0
    //   ) {
    //     console.log(
    //       'координаты движка: ',
    //       getSnakeBodyCoord()[0],
    //       getSnakeBodyCoord()[1],
    //       getSnakeBodyCoord()[2]
    //     )
    //     console.log('смещения 3D координат: ', getDiff()[0], getDiff()[1], getDiff()[2])
    //     console.log(
    //       'координаты 3D змейки: ',
    //       getSnakeUnitPosition()[0],
    //       getSnakeUnitPosition()[1],
    //       getSnakeUnitPosition()[2]
    //     )
    //   }
    // }

    //*********************************
    if (
      getSnakeHeadParams().snakeHeadStepX !== 0 ||
      getSnakeHeadParams().snakeHeadStepY !== 0
    ) {
      snake.forEach((_, index) => {
        if (index === 0 && headRef.current) {
          headRef.current.rotation.z = Math.sin(state.clock.elapsedTime * -2) * 0.2
        }

        if (index === snake.length - 2 && tailRef.current) {
          tailRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 2) * 0.2
        }
      })
    }
  })

  return (
    <group>
      {snake.map((_, index) => {
        if (index === 0) {
          return (
            <group key={index} ref={headRef}>
              <SnakeHead />
            </group>
          )
        } else if (index < snake.length - 2) {
          return (
            <group key={index} /*ref={(el) => (bodyRefs.current[index] = el)} */>
              <SnakeBodyUnit />
            </group>
          )
        } else if (index === snake.length - 2) {
          return (
            <group key={index} ref={tailRef}>
              <SnakeTail />
            </group>
          )
        } else {
          return null
        }
      })}
    </group>
  )
}

export default React.memo(Snake)
