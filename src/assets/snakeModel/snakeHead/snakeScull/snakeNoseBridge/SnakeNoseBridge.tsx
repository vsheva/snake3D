import { snakeCONFIG } from '../../../../../config/snakeConfig'
import SnakeNoseBridgeGeometry from './SnakeNoseBridgeGeometry'

function SnakeNoseBridge() {
  return (
    <mesh castShadow>
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
