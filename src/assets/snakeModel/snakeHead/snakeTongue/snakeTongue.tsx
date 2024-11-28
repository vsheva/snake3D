import { snakeCONFIG } from '../../../../config/snakeConfig'
import { GeometryProps } from '../../../../types/threeTypes'
import SnakeTongueGeometry from './SnakeTongueGeometry'
import { DoubleSide } from 'three'
function SnakeTongue(props: GeometryProps) {
  return (
    <mesh {...props} receiveShadow castShadow>
      <SnakeTongueGeometry />
      <meshStandardMaterial
        color={snakeCONFIG.snakeMOUTH.tongue.color}
        side={DoubleSide}
        opacity={snakeCONFIG.snakeOPACITY}
        transparent
      />
    </mesh>
  )
}

export default SnakeTongue
