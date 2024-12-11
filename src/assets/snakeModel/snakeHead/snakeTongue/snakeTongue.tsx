import { snakeCONFIG } from '../../../../config/snakeConfig/snakeCONFIG'
import SnakeTongueGeometry from './SnakeTongueGeometry'
import { DoubleSide } from 'three'
function SnakeTongue() {
  return (
    <mesh {...snakeCONFIG.head.tongue} receiveShadow castShadow>
      <SnakeTongueGeometry />
      <meshStandardMaterial
        color={snakeCONFIG.colors.snakeThirdCOLOR}
        side={DoubleSide}
        opacity={snakeCONFIG.opacity}
        transparent
      />
    </mesh>
  )
}

export default SnakeTongue
