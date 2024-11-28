import { snakeCONFIG } from '../../../../../config/snakeConfig'
import SnakeUpperPalateGeometry from './SnakeUpperPalateGeometry'

function SnakeUpperPalate() {
  return (
    <mesh receiveShadow castShadow>
      <SnakeUpperPalateGeometry />
      <meshStandardMaterial
        color={snakeCONFIG.snakeMOUTH.upperPalate.color}
        opacity={snakeCONFIG.snakeOPACITY}
        transparent
      />
    </mesh>
  )
}

export default SnakeUpperPalate
