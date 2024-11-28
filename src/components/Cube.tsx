import { forwardRef } from 'react'
import { useControls } from 'leva'
import { Mesh, BoxGeometry, MeshBasicMaterial } from 'three'

type CubeType = Mesh<BoxGeometry, MeshBasicMaterial>

const Cube = forwardRef<CubeType>((_, ref) => {
  const {
    sizeX,
    sizeY,
    sizeZ,
    positionX,
    positionY,
    positionZ,
    rotationX,
    rotationY,
    rotationZ,
    scale,
  } = useControls('Box', {
    sizeX: 1,
    sizeY: 2,
    sizeZ: 1.3,
    positionX: 0,
    positionY: -0.18,
    positionZ: 0.5,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 54.98,
    scale: 0.4,
  })
  return (
    <mesh
      ref={ref}
      position-x={positionX}
      position-y={positionY}
      position-z={positionZ}
      rotation-x={rotationX}
      rotation-y={rotationY}
      rotation-z={rotationZ}
      scale={scale}
      castShadow
    >
      <boxGeometry args={[sizeX, sizeY, sizeZ]} />
      <meshStandardMaterial color={'mediumpurple'} />
    </mesh>
  )
})
export { Cube }
