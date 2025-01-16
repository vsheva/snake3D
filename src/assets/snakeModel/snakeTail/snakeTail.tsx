import { GeometryProps } from '../../../types/threeTypes'
import SnakeTailGeometry from './SnakeTailGeometry'
import { Vector3 } from 'three'
import { snakeCONFIG } from '../../../config/snakeConfig/snakeCONFIG'
function SnakeTail() {
  return (
    <>
      <mesh {...snakeCONFIG.tail} receiveShadow castShadow>
        <SnakeTailGeometry />
        <meshStandardMaterial
          color={snakeCONFIG.colors.snakeFirstCOLOR}
          opacity={snakeCONFIG.opacity}
          transparent
        />
      </mesh>
    </>
  )
}

export default SnakeTail
