import SnakeForeheadGeometry from './SnakeForeheadGeometry'
import { snakeCONFIG } from '../../../../../config/snakeConfig'
function SnakeForehead() {
  return (
    <mesh castShadow>
      <SnakeForeheadGeometry />
      <meshStandardMaterial
        color={snakeCONFIG.snakeFirstCOLOR}
        opacity={snakeCONFIG.snakeOPACITY}
        transparent
      />
    </mesh>
  )
}

export default SnakeForehead
