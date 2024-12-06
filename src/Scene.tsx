import { OrbitControls } from '@react-three/drei'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'
import { Field } from './components/Field'
import { Environment } from './components/Environment'
import Snake from './components/Snake'
import Apple from './components/Apple'
import { useFrame, useThree } from '@react-three/fiber'
import { cameraCONFIG } from './config/cameraConfig'

export function Scene() {
  const { performance } = useControls('Monitoring', {
    performance: true,
  })

  const { camera } = useThree()

  const [x, y, z] = cameraCONFIG.position
  camera.position.set(x, y, z)
  const [xx, yy, zz] = cameraCONFIG.rotation
  camera.rotation.set(xx, yy, zz)
  let speed = 0
  useFrame((_, delta) => {
    // camera.position.y = camera.position.y + speed * delta
    camera.position.x = camera.position.x + speed * delta
    camera.updateProjectionMatrix()
  })
  return (
    <>
      {performance && <Perf position='top-left' />}

      {/* <OrbitControls makeDefault /> */}

      <Snake />
      <Apple />
      <Field />
      <Environment />
    </>
  )
}
