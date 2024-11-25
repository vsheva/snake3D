import { GeometryProps } from '../../../types/threeTypes'
import SnakeTailGeometry from './SnakeTailGeometry'
import { DoubleSide, Vector3 } from 'three'
import { snakeCONFIG } from '../../../config/snakeConfig'
function SnakeTail(/*props: GeometryProps*/) {
  return (
    <group /*{...props}*/>
      <mesh
        {...snakeCONFIG.snakeTAIL.shape}
        receiveShadow
        castShadow
        // position={new Vector3(0, 0, 0)}
        // rotation-x={0}
        // rotation-y={22}
        // rotation-z={11}
        // scale={1}
      >
        <SnakeTailGeometry />
        <meshStandardMaterial
          color={snakeCONFIG.snakeFirstCOLOR}
          side={DoubleSide}
          opacity={snakeCONFIG.snakeOPACITY}
          transparent
        />
      </mesh>
    </group>
  )
}

export default SnakeTail
