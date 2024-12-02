import { snakeCONFIG } from '../../../../../config/snakeConfig/snakeCONFIG'
import SnakeUpperLipGeometry from './SnakeUpperLipGeometry'

function SnakeUpperLip() {
  return (
    <mesh receiveShadow castShadow>
      <SnakeUpperLipGeometry />
      <meshStandardMaterial
        color={snakeCONFIG.colors.snakeFirstCOLOR}
        opacity={snakeCONFIG.opacity}
        transparent
      />
    </mesh>
  )
}

export default SnakeUpperLip
