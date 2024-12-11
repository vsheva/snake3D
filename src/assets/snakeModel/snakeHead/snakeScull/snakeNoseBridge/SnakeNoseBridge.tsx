import { snakeCONFIG } from '../../../../../config/snakeConfig/snakeCONFIG'
import SnakeNoseBridgeGeometry from './SnakeNoseBridgeGeometry'

function SnakeNoseBridge() {
  return (
    <mesh receiveShadow castShadow>
      <SnakeNoseBridgeGeometry />
      <meshStandardMaterial
        color={snakeCONFIG.colors.snakeFirstCOLOR}
        opacity={snakeCONFIG.opacity}
        transparent
      />
    </mesh>
  )
}

export default SnakeNoseBridge
