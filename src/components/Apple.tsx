import * as React from 'react'
import { useGLTF } from '@react-three/drei'

const Apple: React.FC = () => {
  const { scene } = useGLTF('/apple.glb')

  React.useEffect(() => {
    scene.traverse((node) => {
      if ('isMesh' in node) {
        node.castShadow = true
      }
    })
  }, [scene])

  return <primitive object={scene} position={[0, 5, 0.8]} scale={0.4} />
}

export default Apple
