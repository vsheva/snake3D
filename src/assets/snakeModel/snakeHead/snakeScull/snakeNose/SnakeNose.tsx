import SnakeNoseGeometry from './SnakeNoseGeometry'
import { snakeCONFIG } from '../../../../../config/snakeConfig/snakeCONFIG'
function SnakeNose() {
  return (
    <mesh receiveShadow castShadow>
      <SnakeNoseGeometry />
      <meshStandardMaterial
        color={snakeCONFIG.colors.snakeFirstCOLOR}
        opacity={snakeCONFIG.opacity}
        transparent
      />
    </mesh>
  )
}

export default SnakeNose
