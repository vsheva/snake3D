import SnakeCheeksGeometry from './SnakeCheeksGeometry'
import { snakeCONFIG } from '../../../../../config/snakeConfig'
function SnakeCheeks() {
  return (
    <mesh receiveShadow castShadow>
      <SnakeCheeksGeometry />
      <meshStandardMaterial
        color={snakeCONFIG.snakeFirstCOLOR}
        opacity={snakeCONFIG.snakeOPACITY}
        transparent
      />
    </mesh>
  )
}

export default SnakeCheeks
