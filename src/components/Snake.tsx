import SnakeTail from '../assets/snakeModel/snakeTail/SnakeTail'
import SnakeHead from '../assets/snakeModel/snakeHead/SnakeHead'
import { useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import checkTimerStep from '../engine/time/checkTimerStep'
import { snakeAnimation } from '../animations/snakeAnimation/snakeAnimation'
import * as HEAD from '../animations/snakeAnimation/headAnimations/snakeHeadProps'
import { getTailMove } from '../animations/snakeAnimation/tailAnimations/snakeTailWaves'
import * as TAIL from '../animations/snakeAnimation/tailAnimations/snakeTailAnimationSet'
import SnakeBodyUnit from '../assets/snakeModel/snakeBody/snakeBodyUnit'
import { checkTimerWorking } from '../engine/time/isTimer'
import { useControls } from 'leva'
import { changeSnakeSpeed } from '../animations/snakeAnimation/snakeSpeedSetting'
import { getBodyTurnaround } from '../animations/snakeAnimation/bodyAnimations/snakeBodyTurnaround'
import { GeometryProps } from '../types/threeTypes'

export const snakeLength: number[][] = [
  // [0, 0, 0],
  // [0, 0, 0],
  // [-1, 1, 0],
  // [-2, 2, 0],
  // [-2, 2, 0],
  // [-2, 2, 0],
  // [-1, 3, 0],
  // [-1, 3, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
]

export const Snake = () => {
  const headRef = useRef<THREE.Group>(null)
  const tailRef = useRef<THREE.Group>(null)
  const bodyRef = snakeLength.map(() => useRef<THREE.Group>(null))
  let tailGap = 0
  const snakeBodyUnit: GeometryProps = {
    position: new THREE.Vector3(0, 0, 0),
    'rotation-x': 0,
    'rotation-y': 0,
    'rotation-z': 22,
    scale: 1,
  }

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
    const snakeSteps = snakeAnimation(delta)
    tailGap = snakeLength.length - 2.05
    if (!checkTimerStep()) {
      snakeLength.forEach((_, index) => {
        const waveAmplitude = amplitude
        const waveFrequency = frequency
        let offset = 0
        if (checkTimerWorking())
          offset = Math.sin(clock.elapsedTime * waveFrequency + index) * waveAmplitude
        // const positionSet = index % 2 !== 0 ? [0, -index] : [-0.95, -(index + 1)]
        if (headRef.current && index === 0) {
          headRef.current.position.set(
            HEAD.getPositionHead()[0],
            HEAD.getPositionHead()[1],
            0
          )
          headRef.current.rotation.set(0, 0, HEAD.getRotationHead()[2])
        }
        if (bodyRef[index].current && index > 0 && index < snakeLength.length - 1) {
          if (TAIL.getIsTailAnimating() && TAIL.getTailAnimatingQueue().length > 0) {
            if (getBodyTurnaround() === index) {
              const { position, rotation, scale } = TAIL.setTailAnimation()

              bodyRef[index].current.position.set(
                /*positionSet[0] + */ snakeLength[index][0] +
                  position[0] +
                  getTailMove()[0],
                /*positionSet[1] + */
                snakeLength[index][1] + position[1] - index + +0.95 + getTailMove()[1],
                0
              )
              bodyRef[index].current.rotation.set(rotation[0], rotation[1], rotation[2])
              bodyRef[index].current.scale.set(scale[0], scale[1], scale[2])
            }
          } else {
            bodyRef[index].current.position.set(
              /*positionSet[0] + */ snakeLength[index][0] + offset,
              /*positionSet[1] + */ snakeLength[index][1] + 0.95 - index,
              0
            )
          }
          // bodyRef[index].current.rotation.set(0, 0, index % 2 === 0 ? Math.PI / 2 : 0)
        }
        if (tailRef.current && index === snakeLength.length - 1) {
          if (TAIL.getIsTailAnimating() && TAIL.getTailAnimatingQueue().length > 0) {
            const { position, rotation, scale } = TAIL.setTailAnimation()
            tailRef.current.position.set(
              position[0] + getTailMove()[0],
              position[1] - tailGap + getTailMove()[1],
              position[2]
            )
            tailRef.current.rotation.set(rotation[0], rotation[1], rotation[2])
            tailRef.current.scale.set(scale[0], scale[1], scale[2])
          } else {
            tailRef.current.position.set(offset, -tailGap, 0)
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
        ) : index < snakeLength.length - 1 ? (
          <group key={Math.random() * index} ref={bodyRef[index]}>
            <SnakeBodyUnit {...snakeBodyUnit} />
          </group>
        ) : (
          <group ref={tailRef} key={Math.random() * index}>
            <SnakeTail />
          </group>
        )
      )}
    </group>
  )
}
