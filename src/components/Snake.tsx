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
import { snakeANIMATION } from '../config/snakeConfig/snakeANIMATION/snakeANIMATION'
import getSnakeMoveDirection from '../engine/snake/getSnakeMoveDirection'
import { GeometryProps } from '../types/threeTypes'
import {
  AnimationProps,
  AnimationStep,
  AnimationStepProps,
} from '../types/animationTypes'
import { snakeTailAnimation } from '../animations/snakeTailAnimation'
import { snakeHeadAnimation } from '../animations/snakeHeadAnimation'
import {
  getSnakeHeadTransitionProps,
  setSnakeHeadTransitionProps,
} from '../animations/snakeHeadTransitionProps'
import { checkTimerWorking } from '../engine/time/isTimer'
import checkTimerStep from '../engine/time/checkTimerStep'
import {
  getSnakeTailTransitionProps,
  setSnakeTailTransitionProps,
} from '../animations/snakeTailTransitionProps'

export const Snake = () => {
  const headRef = useRef<THREE.Group>(null)
  const tailRef = useRef<THREE.Group>(null)
  let tailPos = [0, 0]
  let tailMove = [0, 0]
  let tailWaves = [-2, 0]
  const positionHead = [0, 0, 0]
  const rotationHead = [0, 0, 0]
  let side = 1
  let doubleSide = 1
  let dta = 0
  let positionHeadAnimX = 0
  let positionHeadAnimY = 0
  let tailAnimationQueue: AnimationStep[] = []
  let tailAnimationCounter = 0
  let headAnimationQueue: AnimationStep[] = []
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
  // let isHeadAnimating = false
  // const setIsHeadAnimating = (headAnimating: boolean) => {
  //   isHeadAnimating = headAnimating
  // }

  useFrame((_, delta) => {
    /************ HEAD ****************/
    // const {
    //   position: positionHead,
    //   rotation: rotationHead,
    //   scale: scaleHead,
    // } = getSnakeHeadTransitionProps()
    /************ TAIL ****************/
    const {
      position: positionTail,
      rotation: rotationTail,
      scale: scaleTail,
    } = getSnakeTailTransitionProps()
    if (tailAnimationCounter === 0 && tailAnimationQueue.length > 0) {
      setIsTailAnimating(true)
    }
    // if (headAnimationCounter === 0 && headAnimationQueue.length > 0) {
    //   setIsHeadAnimating(true)
    // }
    if (!checkTimerStep()) {
      let currentStepHeadX = getSnakeHeadParams().snakeHeadStepX
      let currentStepHeadY = getSnakeHeadParams().snakeHeadStepY
      if (previousStepHeadX === 0 && previousStepHeadY === 0) {
        if (currentStepHeadX === 0) {
          tailWaves = [-2, 0]
        } else if (currentStepHeadX === 1) {
          tailWaves = [0, 2]
        } else {
          tailWaves = [0, -2]
        }
      }
      counterHeadX = counterHeadX + currentStepHeadX * delta * moveSpeed
      counterHeadY = counterHeadY + currentStepHeadY * delta * moveSpeed
      ;[counterHeadX, counterHeadY] = setSnakePosition({
        counterX: counterHeadX,
        counterY: counterHeadY,
      })
      // leftUp
      if (previousStepHeadX === -1 && currentStepHeadX === 0 && currentStepHeadY === 1) {
        // positionHeadX = Math.round(positionHeadX)
        positionHead[0] = Math.floor(positionHead[0])
        positionHead[1] = Math.ceil(positionHead[1])
        tailPos = [0, -0.25]
        tailWaves = [-2, 0]
        // rotationTail[2] = 0
        // positionHeadY++
        // positionHead[1]++
        counterHeadX = 0
        tailAnimationQueue.shift()
        tailAnimationCounter = 0
        tailAnimationQueue.push({ name: 'leftUp', step: 18 })
        isTailAnimating = true
        // headAnimationQueue.push({ name: 'leftUp', step: 21 })
      }
      // leftDown
      if (previousStepHeadX === -1 && currentStepHeadX === 0 && currentStepHeadY === -1) {
        // positionHeadX = Math.round(positionHeadX)
        positionHead[0] = Math.floor(positionHead[0])
        positionHead[1] = Math.floor(positionHead[1])
        tailPos = [0, 0.25]
        tailWaves = [2, 0]
        // rotationTail[2] = 22
        // positionHead[1]--
        // positionHeadY--
        counterHeadX = 0
        tailAnimationQueue.shift()
        tailAnimationCounter = 0
        tailAnimationQueue.push({ name: 'leftDown', step: 18 })
        isTailAnimating = true
        // headAnimationQueue.push({ name: 'turn-left', step: 18 })
      }
      // rightUp
      if (previousStepHeadX === 1 && currentStepHeadX === 0 && currentStepHeadY === 1) {
        // positionHeadX = Math.round(positionHeadX)
        positionHead[0] = Math.ceil(positionHead[0])
        positionHead[1] = Math.ceil(positionHead[1])
        tailPos = [0, -0.25]
        tailWaves = [-2, 0]
        // rotationTail[2] = 0
        // positionHeadY++
        // positionHead[1]++
        counterHeadX = 0
        tailAnimationQueue.shift()
        tailAnimationCounter = 0
        tailAnimationQueue.push({ name: 'rightUp', step: 18 })
        isTailAnimating = true
        // headAnimationQueue.push({ name: 'rightUp', step: 21 })
      }
      // rightDown
      if (previousStepHeadX === 1 && currentStepHeadX === 0 && currentStepHeadY === -1) {
        // positionHeadX = Math.round(positionHeadX)
        positionHead[0] = Math.ceil(positionHead[0])
        positionHead[1] = Math.floor(positionHead[1])
        tailPos = [0, 0.25]
        tailWaves = [2, 0]
        // rotationTail[2] = 22
        // positionHeadY--
        // positionHead[1]--
        counterHeadX = 0
        tailAnimationQueue.shift()
        tailAnimationCounter = 0
        tailAnimationQueue.push({ name: 'rightDown', step: 18 })
        isTailAnimating = true
        // headAnimationQueue.push({ name: 'turn-right', step: 18 })
      }
      // upRight
      if (previousStepHeadY === 1 && currentStepHeadY === 0 && currentStepHeadX === 1) {
        // positionHeadY = Math.round(positionHeadY)
        positionHead[0] = Math.ceil(positionHead[0])
        positionHead[1] = Math.ceil(positionHead[1])
        tailPos = [-0.25, 0]
        tailWaves = [0, 2]
        // rotationTail[2] = 11
        // console.log(positionHead[0], positionTail[0])
        // positionHeadX++
        // positionHead[0]++
        counterHeadY = 0
        tailAnimationQueue.shift()
        tailAnimationCounter = 0
        tailAnimationQueue.push({ name: 'upRight', step: 18 })
        isTailAnimating = true
        // headAnimationQueue.push({ name: 'upRight', step: 21 })
      }
      // upLeft
      if (previousStepHeadY === 1 && currentStepHeadY === 0 && currentStepHeadX === -1) {
        // positionHeadY = Math.round(positionHeadY)
        positionHead[0] = Math.floor(positionHead[0])
        positionHead[1] = Math.ceil(positionHead[1])
        tailPos = [0.25, 0]
        tailWaves = [0, -2]
        // rotationTail[2] = 22
        // positionHeadX--
        // positionHead[0]--
        counterHeadY = 0
        tailAnimationQueue.shift()
        tailAnimationCounter = 0
        tailAnimationQueue.push({ name: 'upLeft', step: 18 })
        isTailAnimating = true
        // headAnimationQueue.push({ name: 'upLeft', step: 21 })
      }
      // downRight
      if (previousStepHeadY === -1 && currentStepHeadY === 0 && currentStepHeadX === 1) {
        // positionHeadY = Math.round(positionHeadY)
        positionHead[0] = Math.ceil(positionHead[0])
        positionHead[1] = Math.floor(positionHead[1])
        tailPos = [-0.25, 0]
        tailWaves = [0, 2]
        // rotationTail[2] = 11
        // positionHeadX++
        // positionHead[0]++
        counterHeadY = 0
        tailAnimationQueue.shift()
        tailAnimationCounter = 0
        tailAnimationQueue.push({ name: 'downRight', step: 18 })
        isTailAnimating = true
        // headAnimationQueue.push({ name: 'turn-left', step: 18 })
      }
      // downLeft
      if (previousStepHeadY === -1 && currentStepHeadY === 0 && currentStepHeadX === -1) {
        // positionHeadY = Math.round(positionHeadY)
        positionHead[0] = Math.floor(positionHead[0])
        positionHead[1] = Math.floor(positionHead[1])
        tailPos = [0.25, 0]
        tailWaves = [0, -2]
        // rotationTail[2] = 0
        // positionHeadX--
        // positionHead[0]--
        counterHeadY = 0
        tailAnimationQueue.shift()
        tailAnimationCounter = 0
        tailAnimationQueue.push({ name: 'downLeft', step: 18 })
        isTailAnimating = true
        // headAnimationQueue.push({ name: 'turn-right', step: 18 })
      }
      if (previousStepHeadX === 0 && currentStepHeadX === 1) rotationHeadZ = 11
      if (previousStepHeadX === 0 && currentStepHeadX === -1) rotationHeadZ = 33
      if (previousStepHeadY === 0 && currentStepHeadY === -1) rotationHeadZ = 22
      if (previousStepHeadY === 0 && currentStepHeadY === 1) rotationHeadZ = 0
      previousStepHeadX = currentStepHeadX
      previousStepHeadY = currentStepHeadY

      // positionHeadX = positionHeadX + currentStepHeadX * delta * moveSpeed
      // positionHeadY = positionHeadY + currentStepHeadY * delta * moveSpeed
      // console.log('head: ', positionHead[0])
      // console.log('tail: ', positionTail[0])
      positionHead[0] = positionHead[0] + currentStepHeadX * delta * moveSpeed
      positionHead[1] = positionHead[1] + currentStepHeadY * delta * moveSpeed
      // positionTail[0] = positionHead[0] + tailPos[0]
      // positionTail[1] = positionHead[1] + tailPos[1]
      // positionTail[0] = positionTail[0] + currentStepHeadX * delta * moveSpeed
      // positionTail[1] = positionTail[1] + currentStepHeadY * delta * moveSpeed

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
      //   if (headRef.current) {
      //     headRef.current.position.set(
      //       positionHead[0] + x_head,
      //       positionHead[1] + y_head,
      //       positionHead[2] + z_head
      //     )

      //     // headRef.current.rotation.set(xx_head, yy_head, zz_head)
      //     // headRef.current.scale.set(xxx_head, yyy_head, zzz_head)
      //   }
      //   headAnimationCounter++
      //   if (headAnimationCounter > headAnimationQueue[0].step) {
      //     setSnakeHeadTransitionProps({
      //       position: [
      //         positionHead[0] + x_head,
      //         positionHead[1] + y_head,
      //         positionHead[2] + z_head,
      //       ],
      //       rotation: [xx_head, yy_head, zz_head],
      //       scale: [xxx_head, yyy_head, zzz_head],
      //     })
      //     headAnimationQueue.shift()
      //     headAnimationCounter = 0
      //     setIsHeadAnimating(false)
      //   }
      // } else {
      if (checkTimerWorking()) {
        if (counterHeadX === 0 && currentStepHeadX === 0 && currentStepHeadY !== 0) {
          side = counterHeadY === 0 ? side * -1 : side
          dta = side > 0 ? Math.abs(counterHeadY) : 1 - Math.abs(counterHeadY)
          doubleSide =
            Math.abs(counterHeadY) === 0 && Math.round(dta) === 0
              ? doubleSide * -1
              : doubleSide
          positionHeadAnimX = doubleSide * Math.sin(dta) * waveAmplitude
          positionHeadAnimY = 0
        }
        if (counterHeadY === 0 && currentStepHeadY === 0 && currentStepHeadX !== 0) {
          side = counterHeadX === 0 ? side * -1 : side
          dta = side > 0 ? Math.abs(counterHeadX) : 1 - Math.abs(counterHeadX)
          doubleSide =
            Math.abs(counterHeadX) === 0 && Math.round(dta) === 0
              ? doubleSide * -1
              : doubleSide
          positionHeadAnimY = doubleSide * Math.sin(dta) * waveAmplitude
          positionHeadAnimX = 0
        }
        if (currentStepHeadX === 0) {
          tailMove[0] = positionHeadAnimX * tailWaves[0]
          tailMove[1] = positionHeadAnimY * tailWaves[1]
        } else {
          tailMove[0] = positionHeadAnimY * tailWaves[1]
          tailMove[1] = positionHeadAnimX * tailWaves[0]
        }
        // }
        if (headRef.current) {
          // headRef.current.position.set(
          //   positionHeadX + positionHeadAnimX + x_head,
          //   positionHeadY + positionHeadAnimY + y_head,
          //   z_head
          // )

          // headRef.current.position.set(
          //   positionHeadX + positionHeadAnimX,
          //   positionHeadY + positionHeadAnimY,
          //   0
          // )
          headRef.current.position.set(
            positionHead[0] + positionHeadAnimX,
            positionHead[1] + positionHeadAnimY,
            0
          )

          // headRef.current.rotation.set(xx_head, yy_head, zz_head)
          // headRef.current.scale.set(xxx_head, yyy_head, zzz_head)
          headRef.current.rotation.set(0, 0, rotationHeadZ)
        }
        // setSnakeHeadTransitionProps({
        //   position: [positionHead[0], positionHead[1], 0],
        //   rotation: [0, 0, rotationHeadZ],
        //   scale: [0, 0, 0],
        // })

        if (tailRef.current) {
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
            tailRef.current.position.set(
              x_tail + tailMove[0],
              y_tail + tailMove[1],
              z_tail
            )
            tailRef.current.rotation.set(xx_tail, yy_tail, zz_tail)
            tailRef.current.scale.set(xxx_tail, yyy_tail, zzz_tail)
            // setSnakeTailTransitionProps({
            //   position: [x_tail, y_tail, z_tail],
            //   rotation: [xx_tail, yy_tail, zz_tail],
            //   scale: [xxx_tail, yyy_tail, zzz_tail],
            // })
          } else {
            tailRef.current.position.set(
              positionTail[0] + tailMove[0],
              positionTail[1] + tailMove[1],
              0
            )
            tailRef.current.rotation.set(0, 0, rotationTail[2])
            // setSnakeTailTransitionProps({
            //   position: [positionTail[0], positionTail[1], 0],
            //   rotation: [0, 0, rotationTail[2]],
            //   scale: [1, 1, 1],
            // })
          }
          // tailRef.current.scale.set(xxx_tail, yyy_tail, zzz_tail)
          // tailProps.position = new THREE.Vector3(
          //   -positionHeadAnimX,
          //   -positionHeadAnimY,
          //   0
          // )
        }
      }
      // if (counterHeadY === 0) {
      //   side = counterHeadX === 0 ? side * -1 : side
      //   positionHeadY = (side * Math.sin(counterHeadX)) / 4
      // }
    }
    /********************** TAIL *************************/

    // }
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

    //
  })

  return (
    <>
      <group ref={headRef}>
        <SnakeHead />

        {/*<SnakeBodyUnit /> */}
        <group ref={tailRef}>
          <SnakeTail {...tailProps} />
        </group>
      </group>
    </>
  )
}
