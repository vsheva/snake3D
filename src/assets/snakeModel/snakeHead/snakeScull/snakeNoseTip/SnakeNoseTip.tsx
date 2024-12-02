import { snakeCONFIG } from '../../../../../config/snakeConfig/snakeCONFIG'
import SnakeNoseTipGeometry from './SnakeNoseTipGeometry'

function SnakeNoseTip() {
  return (
    <mesh receiveShadow castShadow>
      <SnakeNoseTipGeometry />
      <meshStandardMaterial
        color={snakeCONFIG.colors.snakeFirstCOLOR}
        opacity={snakeCONFIG.opacity}
        transparent
      />
    </mesh>
  )
}

export default SnakeNoseTip
