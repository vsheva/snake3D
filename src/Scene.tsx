import { OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'
import { useRef } from 'react'
import { BoxGeometry, Mesh, MeshBasicMaterial } from 'three'
import { Cube } from './components/Cube'
import { Field } from './components/Field'
import { Sky } from '@react-three/drei'
import { fieldCONFIG } from './config/fieldConfig'
import { Sphere } from './components/Sphere'
import Snake from './components/Snake'
import Apple from './components/Apple'
function Scene() {
  const { performance } = useControls('Monitoring', {
    performance: true,
  })
  // const { positionX, positionY, rotationZ } =
  //   useControls('Snake', {
  //     positionX: 0,
  //     positionY: 0.35,
  //     rotationZ
  //   })

  // const { animate } = useControls('Cube', {
  //   animate: true,
  // })

  // const cubeRef = useRef<Mesh<BoxGeometry, MeshBasicMaterial>>(null)

  // useFrame((_, delta) => {
  //   if (animate) {
  //     cubeRef.current!.rotation.y += delta / 3
  //   }
  // })

  return (
    <>
      {performance && <Perf position='top-left' />}

      {/* <OrbitControls makeDefault /> */}

      <directionalLight
        position={[-2, 2, 3]}
        intensity={1.5}
        castShadow
        shadow-mapSize={[1024 * 2, 1024 * 2]}
      />
      <ambientLight intensity={0.2} />

      {/* <Cube /> */}
      {/* <Sphere /> */}
      <Snake />
      <Apple />
      <Sky sunPosition={[-2, 2, 3]} />
      <Field size={fieldCONFIG.fieldSIZE} />
    </>
  )
}

export { Scene }
