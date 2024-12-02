import SnakeForeheadGeometry from './SnakeForeheadGeometry'
import { snakeCONFIG } from '../../../../../config/snakeConfig/snakeCONFIG'
function SnakeForehead() {
  return (
    <mesh receiveShadow castShadow>
      <SnakeForeheadGeometry />
      <meshStandardMaterial
        color={snakeCONFIG.colors.snakeFirstCOLOR}
        opacity={snakeCONFIG.opacity}
        transparent
      />
    </mesh>
  )
}

export default SnakeForehead
