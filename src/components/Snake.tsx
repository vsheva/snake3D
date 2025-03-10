import SnakeTail from '../assets/snakeModel/snakeTail/SnakeTail'
import SnakeHead from '../assets/snakeModel/snakeHead/SnakeHead'
import { useRef, useState } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import checkTimerStep from '../engine/time/checkTimerStep'
import { snakeAnimation } from '../animations/snakeAnimation/snakeAnimation'
import * as HEAD from '../animations/snakeAnimation/headAnimations/snakeHeadProps'
// import { getTailMove } from '../animations/snakeAnimation/tailAnimations/snakeTailWaves'
import * as TAIL from '../animations/snakeAnimation/tailAnimations/snakeTailAnimationSet'
import SnakeBodyUnit from '../assets/snakeModel/snakeBody/snakeBodyUnit'
import { checkTimerWorking } from '../engine/time/isTimer'
import { useControls } from 'leva'
import { changeSnakeSpeed } from '../animations/snakeAnimation/snakeSpeedSetting'
import { getBodyTurnaround } from '../animations/snakeAnimation/bodyAnimations/snakeBodyTurnaround'
import { GeometryProps } from '../types/threeTypes'
import { getSnakeBodyCoord } from '../engine/snake/snake'
import { checkContact } from '../engine/events/isContact'
import { getAmountOfFood } from '../engine/food/amountOfFoodPerLevel'

export const snakeLength: number[][] = [
  [0, 0, 0],
  [0, 0, 0],
  [1, 1, 0],
  [1, 1, 0],
  [1, 1, 0],
  [0, 2, 0],
  [-1, 3, 0],
  [-1, 3, 0],
  // [3, 3, 0],
  // [0, 0, 0],
  // [0, 0, 0],
  // [0, 0, 0],
  // [0, 0, 0],
  // [0, 0, 0],
  // [0, 0, 0],
  // [0, 0, 0],
  // [0, 0, 0],
  //   [0, 0, 0],
]

export const Snake = () => {
  // const [snakeCoord, setSnakeCoord] = useState(getSnakeBodyCoord())
  // let snakeLength = Array(snakeCoord.length).fill([])

  // console.log('Length: ', snakeLength)

  const bodyRefs = useRef<Array<React.RefObject<THREE.Group>>>(
    Array(getAmountOfFood())
      .fill(null)
      .map(() => useRef<THREE.Group>(null))
  )

  const headRef = useRef<THREE.Group>(null)
  const tailRef = useRef<THREE.Group>(null)

  let tailGap = 0

  const { amplitude } = useControls('Amplitude', {
    amplitude: { value: 0.13, min: 0, max: 1, step: 0.001 },
  })
  const { frequency } = useControls('Frequency', {
    frequency: { value: 5, min: 0, max: 30, step: 0.1 },
  })
  const { snakeSpeed } = useControls('SnakeSpeed', {
    snakeSpeed: { value: 1, min: 1, max: 10, step: 1 },
  })
  changeSnakeSpeed(snakeSpeed)
  useFrame(({ clock }, delta) => {
    // const newSnakeBody = getSnakeBodyCoord()
    // console.log('coord: ', newSnakeBody)
    // if (newSnakeBody.length !== snakeLength.length) {
    //   setSnakeCoord(newSnakeBody)
    // }
    // snakeLength = snakeLength.map((item, index) => {
    //   let xDelta = 0
    //   let yDelta = 0
    //   if (index < snakeCoord.length - 1 && index !== 0) {
    //     xDelta = snakeCoord[index - 1][0] - snakeCoord[index][0]
    //     yDelta = snakeCoord[index - 1][1] - snakeCoord[index][1]
    //     if (xDelta === 0 || yDelta === 0) {
    //       xDelta = 0
    //       yDelta = 0
    //     }
    //     // console.log({ xDelta, yDelta })
    //   }
    //   const output = [xDelta, yDelta]
    //   return output
    // })

    const snakeSteps = snakeAnimation(delta)
    tailGap = snakeLength.length - 3.05
    if (!checkTimerStep()) {
      snakeLength.forEach((_, index) => {
        const waveAmplitude = amplitude
        const waveFrequency = frequency
        let offset = 0
        if (checkTimerWorking())
          offset = Math.sin(clock.elapsedTime * waveFrequency + index) * waveAmplitude
        if (index === 0) {
          headRef.current!.position.set(
            HEAD.getPositionHead()[0],
            HEAD.getPositionHead()[1],
            0
          )
          headRef.current!.rotation.set(0, 0, HEAD.getRotationHead()[2])
        }

        if (bodyRefs.current[index] && index > 0 && index < snakeLength.length - 2) {
          if (TAIL.getIsTailAnimating() && TAIL.getTailAnimatingQueue().length > 0) {
            if (getBodyTurnaround() === index) {
              const { position, rotation, scale } = TAIL.setTailAnimation()

              bodyRefs.current[index]!.current!.position.set(
                snakeLength[index][0] + position[0] + 0,

                snakeLength[index][1] + position[1] - index + +0.95,
                0
              )
              bodyRefs.current[index]!.current!.rotation.set(
                rotation[0],
                rotation[1],
                rotation[2]
              )
              bodyRefs.current[index]!.current!.scale.set(scale[0], scale[1], scale[2])
            }
          } else {
            bodyRefs.current[index]!.current!.position.set(
              snakeLength[index][0] + offset,
              snakeLength[index][1] + 0.95 - index,
              0
            )
          }
        }
        if (index === snakeLength.length - 2) {
          if (TAIL.getIsTailAnimating() && TAIL.getTailAnimatingQueue().length > 0) {
            const { position, rotation, scale } = TAIL.setTailAnimation()
            tailRef.current!.position.set(position[0], position[1] - tailGap, position[2])
            tailRef.current!.rotation.set(rotation[0], rotation[1], rotation[2])
            tailRef.current!.scale.set(scale[0], scale[1], scale[2])
          } else {
            tailRef.current!.position.set(checkContact() ? 0 : offset, -tailGap, 0)
          }
        }
      })
    }
  })

  return (
    <group ref={headRef}>
      {snakeLength.map((_, index) =>
        index === 0 ? (
          <SnakeHead key={Math.random() * index} />
        ) : index < snakeLength.length - 2 ? (
          <group key={Math.random() * index} ref={bodyRefs.current[index]}>
            <SnakeBodyUnit /*{...snakeBodyUnit}*/ />
          </group>
        ) : index === snakeLength.length - 2 ? (
          <group ref={tailRef} key={Math.random() * index}>
            <SnakeTail />
          </group>
        ) : (
          <group key={Math.random() * index}>
            <></>
          </group>
        )
      )}
    </group>
  )
}
