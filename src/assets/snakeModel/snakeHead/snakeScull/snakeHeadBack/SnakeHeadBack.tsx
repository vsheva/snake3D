import SnakeHeadBackGeometry from './SnakeHeadBackGeometry'
import { snakeCONFIG } from '../../../../../config/snakeConfig'
function SnakeHeadBack() {
  return (
    <mesh receiveShadow castShadow>
      <SnakeHeadBackGeometry />
      <meshStandardMaterial
        color={snakeCONFIG.snakeFirstCOLOR}
        opacity={snakeCONFIG.snakeOPACITY}
        transparent
      />
    </mesh>
  )
}

export default SnakeHeadBack
