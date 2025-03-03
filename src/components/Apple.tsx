import * as React from 'react'
import { useGLTF } from '@react-three/drei'
import { getField } from '../engine/field/fieldPerLevel'
import { useFrame, Vector3 } from '@react-three/fiber'
import { getFoodCoord } from '../engine/food/food'
import { getFoodEaten } from '../engine/events/snakeCatchesFoodEvent'

const Apple: React.FC = () => {
  const { scene } = useGLTF('/apple.glb')
  const fieldSize = getField()
  const [foodPosition, setFoodPosition] = React.useState<Vector3>([0, 0, 0.5])

  useFrame(() => {
    const updatedPosition = getFoodCoord()
    const adjustedX = Math.round(updatedPosition[0] - fieldSize / 2 - 1)
    const adjustedY = Math.round(updatedPosition[1] - fieldSize / 2 - 1)
    const adjustedPosition: Vector3 = [adjustedX, adjustedY, 0.5]
    setFoodPosition(adjustedPosition)
  })

  React.useEffect(() => {
    scene.traverse((node) => {
      if ('isMesh' in node) {
        node.castShadow = true
      }
    })
  }, [scene, getFoodEaten()])

  return <primitive object={scene} position={foodPosition} scale={0.3} />
}

export default Apple
