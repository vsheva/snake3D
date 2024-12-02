import { snakeCONFIG } from '../../../../../config/snakeConfig/snakeCONFIG'
import SnakeUpperPalateGeometry from './SnakeUpperPalateGeometry'

function SnakeUpperPalate() {
  return (
    <mesh receiveShadow castShadow>
      <SnakeUpperPalateGeometry />
      <meshStandardMaterial
        color={snakeCONFIG.colors.snakeThirdCOLOR}
        opacity={snakeCONFIG.opacity}
        transparent
      />
    </mesh>
  )
}

export default SnakeUpperPalate
