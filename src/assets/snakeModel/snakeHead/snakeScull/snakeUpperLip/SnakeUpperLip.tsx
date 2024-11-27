import { snakeCONFIG } from '../../../../../config/snakeConfig'
import SnakeUpperLipGeometry from './SnakeUpperLipGeometry'

function SnakeUpperLip() {
  return (
    <mesh receiveShadow castShadow>
      <SnakeUpperLipGeometry />
      <meshStandardMaterial
        color={snakeCONFIG.snakeFirstCOLOR}
        opacity={snakeCONFIG.snakeOPACITY}
        transparent
      />
    </mesh>
  )
}

export default SnakeUpperLip
