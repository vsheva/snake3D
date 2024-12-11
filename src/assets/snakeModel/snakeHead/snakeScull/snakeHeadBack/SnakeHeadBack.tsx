import SnakeHeadBackGeometry from './SnakeHeadBackGeometry'
import { snakeCONFIG } from '../../../../../config/snakeConfig/snakeCONFIG'
function SnakeHeadBack() {
  return (
    <mesh receiveShadow castShadow>
      <SnakeHeadBackGeometry />
      <meshStandardMaterial
        color={snakeCONFIG.colors.snakeFirstCOLOR}
        opacity={snakeCONFIG.opacity}
        transparent
      />
    </mesh>
  )
}

export default SnakeHeadBack
