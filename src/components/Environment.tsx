import { Sky } from '@react-three/drei'
import { AmbientLight } from './AmbientLight'
import { DirectionalLight } from './DirectionalLight'
export function Environment() {
  return (
    <group>
      <Sky sunPosition={[-2, 2, 3]} />
      <AmbientLight />
      <DirectionalLight />
    </group>
  )
}
