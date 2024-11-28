import { snakeCONFIG } from '../../../../../config/snakeConfig'
import SnakeNoseBridgeGeometry from './SnakeNoseBridgeGeometry'

function SnakeNoseBridge() {
  return (
    <mesh receiveShadow castShadow>
      <SnakeNoseBridgeGeometry />
      <meshStandardMaterial
        color={snakeCONFIG.snakeFirstCOLOR}
        opacity={snakeCONFIG.snakeOPACITY}
        transparent
      />
    </mesh>
  )
}

export default SnakeNoseBridge
