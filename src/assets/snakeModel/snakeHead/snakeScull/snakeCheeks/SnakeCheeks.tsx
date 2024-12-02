import SnakeCheeksGeometry from './SnakeCheeksGeometry'
import { snakeCONFIG } from '../../../../../config/snakeConfig/snakeCONFIG'
function SnakeCheeks() {
  return (
    <mesh receiveShadow castShadow>
      <SnakeCheeksGeometry />
      <meshStandardMaterial
        color={snakeCONFIG.colors.snakeFirstCOLOR}
        opacity={snakeCONFIG.opacity}
        transparent
      />
    </mesh>
  )
}

export default SnakeCheeks
