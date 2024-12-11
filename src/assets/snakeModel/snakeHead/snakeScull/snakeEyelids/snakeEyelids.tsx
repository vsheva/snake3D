import SnakeEyelidsGeometry from './SnakeEyelidsGeometry'
import { snakeCONFIG } from '../../../../../config/snakeConfig/snakeCONFIG'
function SnakeEyelids() {
  return (
    <mesh receiveShadow castShadow>
      <SnakeEyelidsGeometry />
      <meshStandardMaterial
        color={snakeCONFIG.colors.snakeSecondCOLOR}
        opacity={snakeCONFIG.opacity}
        transparent
      />
    </mesh>
  )
}

export default SnakeEyelids
