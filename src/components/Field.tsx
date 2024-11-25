import * as THREE from 'three'
import { useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { FieldsProps } from '../types/fieldTypes'
import { fieldCONFIG } from '../config/fieldConfig'

const Field: React.FC<FieldsProps> = ({ size }) => {
  const { fieldCOLOR: fieldColor, fieldRATIO: fieldRatio } = fieldCONFIG
  const { scene } = useThree()
  const gridRef = useRef<THREE.GridHelper | null>(null)
  useEffect(() => {
    const resolution = new THREE.Vector2(size, size)
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
  }, [scene, size])
  return (
    <mesh position={[0, 0, 0]} receiveShadow>
      <planeGeometry args={[size * fieldRatio, size * fieldRatio]} />
      <meshStandardMaterial color={fieldColor} />
    </mesh>
  )
}

export { Field }
