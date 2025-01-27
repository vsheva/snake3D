// import SnakeTail from '../assets/snakeModel/snakeTail/SnakeTail'
// import SnakeHead from '../assets/snakeModel/snakeHead/SnakeHead'
// import { useRef } from 'react'
// import * as THREE from 'three'
// import { useFrame } from '@react-three/fiber'
// import checkTimerStep from '../engine/time/checkTimerStep'
// import { snakeAnimation } from '../animations/snakeAnimation/snakeAnimation'
// import * as HEAD from '../animations/snakeAnimation/headAnimations/snakeHeadProps'
// import { getHeadWave } from '../animations/snakeAnimation/headAnimations/snakeHeadWaves'
// import { getTailMove } from '../animations/snakeAnimation/tailAnimations/snakeTailWaves'
// import * as TAIL from '../animations/snakeAnimation/tailAnimations/snakeTailAnimationSet'
// import SnakeBodyUnit from '../assets/snakeModel/snakeBody/snakeBodyUnit'
// import { getBodyWaves } from '../animations/snakeAnimation/bodyAnimations/snakeBodyWaves'

// export const snakeLength: number[] = [1, 2, 3, 4, 5]

// export const Snake = () => {
//   const headRef = useRef<THREE.Group>(null)
//   const tailRef = useRef<THREE.Group>(null)
//   const bodyRef = snakeLength.map(() => useRef<THREE.Group>(null))
//   let tailGap = 0
//   useFrame((_, delta) => {
//     snakeAnimation(delta)
//     tailGap = snakeLength.length - 0.1
//     if (!checkTimerStep()) {
//       if (headRef.current) {
//         headRef.current.position.set(
//           HEAD.getPositionHead()[0] + getHeadWave()[0],
//           HEAD.getPositionHead()[1] + getHeadWave()[1],
//           0
//         )
//         headRef.current.rotation.set(0, 0, HEAD.getRotationHead()[2])
//       }
//       snakeLength.forEach((_, index) => {
//         if (bodyRef[index].current) {
//           const positionSet = index % 2 !== 0 ? [0, -index] : [-0.95, -(index + 1)]
//           bodyRef[index].current.position.set(
//             positionSet[0] - getBodyWaves()[index][0],
//             positionSet[1] - getBodyWaves()[index][1],
//             0
//           )
//           bodyRef[index].current.rotation.set(0, 0, index % 2 === 0 ? Math.PI / 2 : 0)
//         }
//       })
//       if (tailRef.current) {
//         if (TAIL.getIsTailAnimating() && TAIL.getTailAnimatingQueue().length > 0) {
//           const { position, rotation, scale } = TAIL.setTailAnimation()
//           tailRef.current.position.set(
//             position[0] + getTailMove()[0],
//             position[1] - tailGap + getTailMove()[1],
//             position[2]
//           )
//           tailRef.current.rotation.set(rotation[0], rotation[1], rotation[2])
//           tailRef.current.scale.set(scale[0], scale[1], scale[2])
//         } else {
//           tailRef.current.position.set(getTailMove()[0], getTailMove()[1] - tailGap, 0)
//         }
//       }
//     }
//   })

//   return (
//     <group ref={headRef}>
//       <SnakeHead />
//       {snakeLength.map((_, index) => (
//         <group key={Math.random()} ref={bodyRef[index]}>
//           <SnakeBodyUnit />
//         </group>
//       ))}
//       <group ref={tailRef}>
//         <SnakeTail />
//       </group>
//     </group>
//   )
// }

import SnakeTail from '../assets/snakeModel/snakeTail/SnakeTail'
import SnakeHead from '../assets/snakeModel/snakeHead/SnakeHead'
import { useRef, useState } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import checkTimerStep from '../engine/time/checkTimerStep'
import { snakeAnimation } from '../animations/snakeAnimation/snakeAnimation'
import * as HEAD from '../animations/snakeAnimation/headAnimations/snakeHeadProps'
import { getHeadWave } from '../animations/snakeAnimation/headAnimations/snakeHeadWaves'
import { getTailMove } from '../animations/snakeAnimation/tailAnimations/snakeTailWaves'
import * as TAIL from '../animations/snakeAnimation/tailAnimations/snakeTailAnimationSet'
import SnakeBodyUnit from '../assets/snakeModel/snakeBody/snakeBodyUnit'

export const snakeLength: number[] = [1, 2, 3, 4, 5]

export const Snake = () => {
  const headRef = useRef<THREE.Group>(null)
  const tailRef = useRef<THREE.Group>(null)
  const bodyRef = snakeLength.map(() => useRef<THREE.Group>(null))
  let time = 0
  let tailGap = 0

  useFrame((_, delta) => {
    snakeAnimation(delta)
    tailGap = snakeLength.length - 2 - 0.1
    time += delta
    if (!checkTimerStep()) {
      // if (headRef.current) {
      //   headRef.current.position.set(
      //     HEAD.getPositionHead()[0] + getHeadWave()[0],
      //     HEAD.getPositionHead()[1] + getHeadWave()[1],
      //     0
      //   )
      //   headRef.current.rotation.set(0, 0, HEAD.getRotationHead()[2])
      // }

      // Определяем направление движения змейки
      const isMovingX = Math.abs(HEAD.getPositionHead()[0]) > 0 // Движение по X
      const isMovingY = Math.abs(HEAD.getPositionHead()[1]) > 0 // Движение по Y

      // Обновляем позицию каждого сегмента тела с волнообразным движением
      snakeLength.forEach((_, index) => {
        // Амплитуда волны для каждого сегмента
        const waveAmplitude = 0.13 // Можно настроить амплитуду
        const waveFrequency = 5 // Частота волны

        // Смещение по оси X или Y в зависимости от направления движения змейки
        let offsetX = 0
        let offsetY = 0

        if (isMovingY) {
          offsetX = Math.sin(time * waveFrequency + index) * waveAmplitude
        } else if (isMovingX) {
          offsetY = Math.sin(time * waveFrequency + index) * waveAmplitude
        }
        const positionSet = index % 2 !== 0 ? [0, -index] : [-0.95, -(index + 1)]
        if (headRef.current && index === 0) {
          headRef.current.position.set(
            HEAD.getPositionHead()[0] - offsetX,
            HEAD.getPositionHead()[1] - offsetY,
            0
          )
          headRef.current.rotation.set(0, 0, HEAD.getRotationHead()[2])
        }
        if (bodyRef[index].current && index > 0 && index < snakeLength.length - 1) {
          // Применяем волнообразное смещение к исходному положению
          bodyRef[index].current.position.set(
            positionSet[0] + offsetX, // Смещение по X
            positionSet[1] + offsetY + 1, // Смещение по Y
            0
          )

          bodyRef[index].current.rotation.set(0, 0, index % 2 === 0 ? Math.PI / 2 : 0)
        }
        if (tailRef.current && index === snakeLength.length - 1) {
          if (TAIL.getIsTailAnimating() && TAIL.getTailAnimatingQueue().length > 0) {
            const { position, rotation, scale } = TAIL.setTailAnimation()
            tailRef.current.position.set(
              position[0] + getTailMove()[0],
              position[1] - tailGap + getTailMove()[1] + 1,
              position[2]
            )
            tailRef.current.rotation.set(rotation[0], rotation[1], rotation[2])
            tailRef.current.scale.set(scale[0], scale[1], scale[2])
          } else {
            tailRef.current.position.set(offsetX, offsetY - tailGap, 0)
          }
        }
      })

      // if (tailRef.current) {
      //   if (TAIL.getIsTailAnimating() && TAIL.getTailAnimatingQueue().length > 0) {
      //     const { position, rotation, scale } = TAIL.setTailAnimation()
      //     tailRef.current.position.set(
      //       position[0] + getTailMove()[0],
      //       position[1] - tailGap + getTailMove()[1] + 1,
      //       position[2]
      //     )
      //     tailRef.current.rotation.set(rotation[0], rotation[1], rotation[2])
      //     tailRef.current.scale.set(scale[0], scale[1], scale[2])
      //   } else {
      //     tailRef.current.position.set(
      //       getTailMove()[0],
      //       getTailMove()[1] + 1 - tailGap,
      //       0
      //     )
      //   }
      // }
    }
  })

  return (
    <group ref={headRef}>
      {snakeLength.map((_, index) =>
        index === 0 ? (
          <SnakeHead key={index} />
        ) : index < snakeLength.length - 1 ? (
          <group key={index} ref={bodyRef[index]}>
            <SnakeBodyUnit />
          </group>
        ) : (
          <group ref={tailRef}>
            <SnakeTail />
          </group>
        )
      )}
    </group>
  )
}
