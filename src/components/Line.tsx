import { useRef } from 'react'
import * as THREE from 'three'
import { fieldCONFIG } from '../config/fieldConfig'

export const Line = () => {
  const { fieldSIZE: fieldSize } = fieldCONFIG
  const axesY: number[][] = []
  // const axesX: number[][] = []
  // const axes: number[][] = []
  const Y_points: THREE.Vector3[][] = []
  const X_points: THREE.Vector3[][] = []
  let points: THREE.Vector3[][] = []
  for (let i = 0; i < fieldSize; i++) {
    axesY.push([])
    // axesY[i].push([-15, -15 + i])
    // axesY[i].push([-15, 15 + i])
    Y_points.push([])
    Y_points[i].push(new THREE.Vector3(-15 + i, -15, 0.05))
    Y_points[i].push(new THREE.Vector3(-15 + i, 15, 0.05))
  }
  for (let i = 0; i < fieldSize; i++) {
    X_points.push([])
    X_points[i].push(new THREE.Vector3(-15, -15 + i, 0.05))
    X_points[i].push(new THREE.Vector3(15, -15 + i, 0.05))
  }
  points = X_points.concat(Y_points)
  // console.log(points)
  const lineRef = useRef<THREE.Line>(null)

  return (
    <group position={[0, 0, 0]}>
      {points.map((point, index) => {
        return (
          <primitive
            key={Math.random() * index}
            object={
              new THREE.Line(
                new THREE.BufferGeometry().setFromPoints(point),
                new THREE.LineBasicMaterial({
                  color: '#ff0000',
                  linewidth: 10,
                  linecap: 'round',
                  linejoin: 'round',
                })
              )
            }
            ref={lineRef}
          />
        )
      })}
    </group>
  )
}
