import { GeometryProps } from '../../../types/threeTypes'
import SnakeTailGeometry from './SnakeTailGeometry'
import { Vector3 } from 'three'
import { snakeCONFIG } from '../../../config/snakeConfig/snakeCONFIG'
function SnakeTail(/*props: GeometryProps*/) {
  return (
    <group /*{...props}*/>
      <mesh {...snakeCONFIG.tail} receiveShadow castShadow>
        <SnakeTailGeometry />
        <meshStandardMaterial
          color={snakeCONFIG.colors.snakeFirstCOLOR}
          opacity={snakeCONFIG.opacity}
          transparent
        />
      </mesh>
    </group>
  )
}

export default SnakeTail
