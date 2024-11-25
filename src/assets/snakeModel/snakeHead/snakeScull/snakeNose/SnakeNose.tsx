import SnakeNoseGeometry from './SnakeNoseGeometry'
import { snakeCONFIG } from '../../../../../config/snakeConfig'
function SnakeNose() {
  return (
    <mesh>
      <SnakeNoseGeometry />
      <meshStandardMaterial
        color={snakeCONFIG.snakeFirstCOLOR}
        opacity={snakeCONFIG.snakeOPACITY}
        transparent
      />
    </mesh>
  )
}

export default SnakeNose
