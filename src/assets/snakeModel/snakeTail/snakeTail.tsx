import { GeometryProps } from '../../../types/threeTypes'
import SnakeTailGeometry from './SnakeTailGeometry'
import { DoubleSide, Vector3 } from 'three'
import { snakeCONFIG } from '../../../config/snakeConfig'
function SnakeTail(/*props: GeometryProps*/) {
  return (
    <group /*{...props}*/>
      <mesh {...snakeCONFIG.snakeTAIL.shape} receiveShadow castShadow>
        <SnakeTailGeometry />
        <meshStandardMaterial
          color={snakeCONFIG.snakeFirstCOLOR}
          // side={DoubleSide}
          opacity={snakeCONFIG.snakeOPACITY}
          transparent
        />
      </mesh>
    </group>
  )
}

export default SnakeTail
