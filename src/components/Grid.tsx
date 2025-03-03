import * as THREE from 'three'
import { useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { fieldCONFIG } from '../config/fieldConfig'
import { getField } from '../engine/field/fieldPerLevel'

export const Grid = () => {
  const {
    fieldCOLOR: fieldColor,
    fieldRATIO: fieldRatio,
    // fieldSIZE: fieldSize,
  } = fieldCONFIG
  const fieldSize = getField()
  const { scene } = useThree()
  const gridRef = useRef<THREE.GridHelper | null>(null)
  useEffect(() => {
    const resolution = new THREE.Vector2(fieldSize, fieldSize)
    const gridHelper = new THREE.GridHelper(
      resolution.x,
      resolution.y,
      0xffffff,
      0xffffff
    )
    gridHelper.position.set(0, 0, 0.1)
    gridHelper.rotation.x = Math.PI / 2
    gridHelper.material.transparent = true
    gridHelper.material.opacity = 0.3
    scene.add(gridHelper)
    gridRef.current = gridHelper
  }, [scene, fieldSize])
  return <></>
}
