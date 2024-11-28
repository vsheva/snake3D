import { snakeCONFIG } from '../../../../../config/snakeConfig'
import SnakeNoseTipGeometry from './SnakeNoseTipGeometry'

function SnakeNoseTip() {
  return (
    <mesh receiveShadow castShadow>
      <SnakeNoseTipGeometry />
      <meshStandardMaterial
        color={snakeCONFIG.snakeFirstCOLOR}
        opacity={snakeCONFIG.snakeOPACITY}
        transparent
      />
    </mesh>
  )
}

export default SnakeNoseTip
