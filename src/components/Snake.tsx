import SnakeTail from '../assets/snakeModel/snakeTail/SnakeTail'
import SnakeHead from '../assets/snakeModel/snakeHead/SnakeHead'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import SnakeBodyUnit from '../assets/snakeModel/snakeBody/snakeBodyUnit'
import {
  getSnakeBodyCoord,
  getSnakeHeadParams,
  setSnakeHeadParams,
} from '../engine/snake/snake'
import { setSnakePosition } from '../engine/snake/setSnakePosition'
import { snakeANIMATION } from '../config/snakeConfig/snakeANIMATION/snakeAnimation'
import getSnakeMoveDirection from '../engine/snake/getSnakeMoveDirection'
import { GeometryProps } from '../types/threeTypes'
import { AnimationProps } from '../types/animationTypes'
import { snakeTailAnimation } from '../animations/snakeTailAnimation'
import { snakeHeadAnimation } from '../animations/snakeHeadAnimation'
import {
  getSnakeTransitionProps,
  setSnakeTransitionProps,
} from '../animations/snakeTransitionProps'
import { checkTimerWorking } from '../engine/time/isTimer'
import checkTimerStep from '../engine/time/checkTimerStep'

export const Snake = () => {
  const headRef = useRef<THREE.Group>(null)
  const tailRef = useRef<THREE.Group>(null)
  let side = 1
  let doubleSide = 1
  let dta = 0
  let positionHeadAnimX = 0
  let positionHeadAnimY = 0
  let tailAnimationQueue: AnimationProps[] = []
  let tailAnimationCounter = 0
  let headAnimationQueue: AnimationProps[] = []
  let headAnimationCounter = 0
  let [positionHeadY, positionHeadX, rotationHeadZ, counterHeadX, counterHeadY] = [
    0, 0, 0, 0, 0,
  ]
  let [positionTailY, positionTailX, rotationTailZ, counterTailX, counterTailY] = [
    0, 0, 0, 0, 0,
  ]

  let [x_tail, y_tail, z_tail, xx_tail, yy_tail, zz_tail, xxx_tail, yyy_tail, zzz_tail] =
    [0, 0, 0, 0, 0, 0, 1, 1, 1]
  let [x_head, y_head, z_head, xx_head, yy_head, zz_head, xxx_head, yyy_head, zzz_head] =
    [0, 0, 0, 0, 0, 0, 1, 1, 1]
  let previousStepHeadX = 0
  let previousStepHeadY = 0
  let previousStepTailX = 0
  let previousStepTailY = 0
  let tailProps: GeometryProps = {
    position: new THREE.Vector3(0, 0.9, 0),
    'rotation-x': 0,
    'rotation-y': 0,
    'rotation-z': 0,
    scale: 1,
  }
  const { moveSpeed, waveAmplitude } = snakeANIMATION
  let isTailAnimating = false
  const setIsTailAnimating = (tailAnimating: boolean) => {
    isTailAnimating = tailAnimating
  }
  let isHeadAnimating = false
  const setIsHeadAnimating = (headAnimating: boolean) => {
    isHeadAnimating = headAnimating
  }

  useFrame((_, delta) => {
    if (tailAnimationCounter === 0 && tailAnimationQueue.length > 0) {
      setIsTailAnimating(true)
    }
    if (headAnimationCounter === 0 && headAnimationQueue.length > 0) {
      setIsHeadAnimating(true)
    }
    if (!checkTimerStep()) {
      let currentStepHeadX = getSnakeHeadParams().snakeHeadStepX
      let currentStepHeadY = getSnakeHeadParams().snakeHeadStepY
      counterHeadX = counterHeadX + currentStepHeadX * delta * moveSpeed
      counterHeadY = counterHeadY + currentStepHeadY * delta * moveSpeed
      ;[counterHeadX, counterHeadY] = setSnakePosition({
        counterX: counterHeadX,
        counterY: counterHeadY,
      })
      // if (
      //   (counterHeadX === 0 && counterHeadY !== 0) ||
      //   (counterHeadX !== 0 && counterHeadY === 0)
      // ) {
      //   if (
      //     headAnimationQueue.filter((animation) => animation.name.includes('move')).length <
      //     1
      //   ) {
      //     headAnimationQueue.push(
      //       side > 0
      //         ? { name: 'move-up-left', step: 37 }
      //         : { name: 'move-up-right', step: 37 }
      //     )
      //     side = side * -1
      //   }
      // }

      if (previousStepHeadX === -1 && currentStepHeadX === 0 && currentStepHeadY === 1) {
        positionHeadX = Math.round(positionHeadX)
        positionHeadY++
        counterHeadX = 0
        tailAnimationQueue.push({ name: 'turn-right', step: 18 })
        headAnimationQueue.push({ name: 'turn-right', step: 18 })
      }
      if (previousStepHeadX === -1 && currentStepHeadX === 0 && currentStepHeadY === -1) {
        positionHeadX = Math.round(positionHeadX)
        positionHeadY--
        counterHeadX = 0
        tailAnimationQueue.push({ name: 'turn-left', step: 18 })
        headAnimationQueue.push({ name: 'turn-left', step: 18 })
      }
      if (previousStepHeadX === 1 && currentStepHeadX === 0 && currentStepHeadY === 1) {
        positionHeadX = Math.round(positionHeadX)
        positionHeadY++
        counterHeadX = 0
        tailAnimationQueue.push({ name: 'turn-left', step: 18 })
        headAnimationQueue.push({ name: 'turn-left', step: 18 })
      }
      if (previousStepHeadX === 1 && currentStepHeadX === 0 && currentStepHeadY === -1) {
        positionHeadX = Math.round(positionHeadX)
        positionHeadY--
        counterHeadX = 0
        tailAnimationQueue.push({ name: 'turn-right', step: 18 })
        headAnimationQueue.push({ name: 'turn-right', step: 18 })
      }
      if (previousStepHeadY === 1 && currentStepHeadY === 0 && currentStepHeadX === 1) {
        positionHeadY = Math.round(positionHeadY)
        positionHeadX++
        counterHeadY = 0
        tailAnimationQueue.push({ name: 'turn-right', step: 18 })
        headAnimationQueue.push({ name: 'turn-right', step: 18 })
      }
      if (previousStepHeadY === 1 && currentStepHeadY === 0 && currentStepHeadX === -1) {
        positionHeadY = Math.round(positionHeadY)
        positionHeadX--
        counterHeadY = 0
        tailAnimationQueue.push({ name: 'turn-left', step: 18 })
        headAnimationQueue.push({ name: 'turn-left', step: 18 })
      }
      if (previousStepHeadY === -1 && currentStepHeadY === 0 && currentStepHeadX === 1) {
        positionHeadY = Math.round(positionHeadY)
        positionHeadX++
        counterHeadY = 0
        tailAnimationQueue.push({ name: 'turn-left', step: 18 })
        headAnimationQueue.push({ name: 'turn-left', step: 18 })
      }
      if (previousStepHeadY === -1 && currentStepHeadY === 0 && currentStepHeadX === -1) {
        positionHeadY = Math.round(positionHeadY)
        positionHeadX--
        counterHeadY = 0
        tailAnimationQueue.push({ name: 'turn-right', step: 18 })
        headAnimationQueue.push({ name: 'turn-right', step: 18 })
      }
      if (previousStepHeadX === 0 && currentStepHeadX === 1) rotationHeadZ = 11
      if (previousStepHeadX === 0 && currentStepHeadX === -1) rotationHeadZ = 33
      if (previousStepHeadY === 0 && currentStepHeadY === -1) rotationHeadZ = 22
      if (previousStepHeadY === 0 && currentStepHeadY === 1) rotationHeadZ = 0
      previousStepHeadX = currentStepHeadX
      previousStepHeadY = currentStepHeadY
      positionHeadX = positionHeadX + currentStepHeadX * delta * moveSpeed
      positionHeadY = positionHeadY + currentStepHeadY * delta * moveSpeed
      // if (isHeadAnimating && headAnimationQueue.length > 0) {
      //   let { position, rotation, scale } = snakeHeadAnimation(
      //     headAnimationQueue[0].name,
      //     headAnimationCounter
      //   )
      //   x_head = position[0]
      //   y_head = position[1]
      //   z_head = position[2]
      //   xx_head = rotation[0]
      //   yy_head = rotation[1]
      //   zz_head = rotation[2]
      //   xxx_head = scale[0]
      //   yyy_head = scale[1]
      //   zzz_head = scale[2]
      //   headAnimationCounter++
      //   if (headAnimationCounter > headAnimationQueue[0].step) {
      //     setSnakeTransitionProps({
      //       name: '',
      //       step: 0,
      //       position: [
      //         getSnakeTransitionProps().position[0] + x_head,
      //         getSnakeTransitionProps().position[1] + y_head,
      //         getSnakeTransitionProps().position[2] + z_head,
      //       ],
      //       rotation: [xx_head, yy_head, zz_head],
      //       scale: [xxx_head, yyy_head, zzz_head],
      //     })
      //     headAnimationQueue.shift()
      //     headAnimationCounter = 0
      //     setIsHeadAnimating(false)
      //   }
      // }
      // console.log(currentStepHeadY * delta)
      // if (headRef.current) {
      //   headRef.current.position.set(
      //     getSnakeTransitionProps().position[0] + x_head,
      //     getSnakeTransitionProps().position[1] + y_head,
      //     getSnakeTransitionProps().position[2] + z_head
      //   )
      //   headRef.current.rotation.set(xx_head, yy_head, zz_head)
      //   headRef.current.scale.set(xxx_head, yyy_head, zzz_head)
      // }
      if (checkTimerWorking()) {
        // console.log(checkTimerStep())
        if (counterHeadX === 0 && currentStepHeadX === 0 && currentStepHeadY !== 0) {
          side = counterHeadY === 0 ? side * -1 : side
          dta = side > 0 ? Math.abs(counterHeadY) : 1 - Math.abs(counterHeadY)
          doubleSide =
            Math.abs(counterHeadY) === 0 && Math.round(dta) === 0
              ? doubleSide * -1
              : doubleSide
          positionHeadAnimX = doubleSide * Math.sin(dta) * waveAmplitude
        }
        if (counterHeadY === 0 && currentStepHeadY === 0 && currentStepHeadX !== 0) {
          side = counterHeadX === 0 ? side * -1 : side
          dta = side > 0 ? Math.abs(counterHeadX) : 1 - Math.abs(counterHeadX)
          doubleSide =
            Math.abs(counterHeadX) === 0 && Math.round(dta) === 0
              ? doubleSide * -1
              : doubleSide
          positionHeadAnimY = doubleSide * Math.sin(dta) * waveAmplitude
        }
      }
    }
    // if (counterHeadY === 0) {
    //   side = counterHeadX === 0 ? side * -1 : side
    //   positionHeadY = (side * Math.sin(counterHeadX)) / 4
    // }
    if (headRef.current) {
      headRef.current.position.set(
        positionHeadX + positionHeadAnimX,
        positionHeadY + positionHeadAnimY,
        0
      )
      headRef.current.rotation.set(0, 0, rotationHeadZ)
    }

    // let currentStepTailX = previousStepTailX
    // let currentStepTailY = previousStepTailY
    // counterTailX = counterTailX + previousStepTailX * delta
    // counterTailY = counterTailY + previousStepTailY * delta
    // if (Math.abs(counterTailX) > 1) counterTailX = 0
    // if (Math.abs(counterTailY) > 1) counterTailY = 0

    // if (counterTailX === 0 && counterTailY === 0) {
    //   currentStepTailY = getSnakeHeadParams().snakeHeadStepY
    //   currentStepTailX = getSnakeHeadParams().snakeHeadStepX
    // }
    // if (previousStepTailX === -1 && currentStepTailX === 0) positionTailX = positionHeadX
    // if (previousStepTailX === 1 && currentStepTailX === 0) positionTailX = positionHeadX
    // if (previousStepTailY === -1 && currentStepTailY === 0) positionTailY = positionHeadY
    // if (previousStepTailY === 1 && currentStepTailY === 0) positionTailY = positionHeadY
    // if (previousStepTailX === 0 && currentStepTailX === 1) {
    //   rotationTailZ = 11
    //   positionTailY = positionHeadY
    //   positionTailX = positionHeadX
    // }
    // if (previousStepTailX === 0 && currentStepTailX === -1) {
    //   rotationTailZ = 33
    //   positionTailY = positionHeadY
    //   positionTailX = positionHeadX
    // }
    // if (previousStepTailY === 0 && currentStepTailY === -1) {
    //   rotationTailZ = 22
    //   positionTailX = positionHeadX
    //   positionTailY = positionHeadY
    // }
    // if (previousStepTailY === 0 && currentStepTailY === 1) {
    //   rotationTailZ = 0
    //   positionTailX = positionHeadX
    //   positionTailY = positionHeadY
    // }
    // previousStepTailX = currentStepTailX
    // previousStepTailY = currentStepTailY
    // positionTailX = positionTailX + currentStepTailX * delta
    // positionTailY = positionTailY + currentStepTailY * delta
    if (isTailAnimating && tailAnimationQueue.length > 0) {
      let { position, rotation, scale } = snakeTailAnimation(
        tailAnimationQueue[0].name,
        tailAnimationCounter
      )
      x_tail = position[0]
      y_tail = position[1]
      z_tail = position[2]
      xx_tail = rotation[0]
      yy_tail = rotation[1]
      zz_tail = rotation[2]
      xxx_tail = scale[0]
      yyy_tail = scale[1]
      zzz_tail = scale[2]
      tailAnimationCounter++
      if (tailAnimationCounter > tailAnimationQueue[0].step) {
        tailAnimationQueue.shift()
        tailAnimationCounter = 0
        setIsTailAnimating(false)
      }
    }

    if (tailRef.current) {
      tailRef.current.position.set(x_tail, y_tail, z_tail)
      tailRef.current.rotation.set(xx_tail, yy_tail, zz_tail)
      tailRef.current.scale.set(xxx_tail, yyy_tail, zzz_tail)
    }
  })

  return (
    <>
      <group ref={headRef}>
        <SnakeHead />
      </group>
      {/*<SnakeBodyUnit /> */}
      <group ref={tailRef}>
        <SnakeTail {...tailProps} />
      </group>
    </>
  )
}
