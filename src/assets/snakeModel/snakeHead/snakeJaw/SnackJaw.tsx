import { snakeCONFIG } from '../../../../config/snakeConfig/snakeCONFIG'
import SnakeJawGeometry from './SnakeJawGeometry'
function SnakeJaw() {
  return (
    <mesh {...snakeCONFIG.head.jaw} receiveShadow castShadow>
      <SnakeJawGeometry />
      <meshStandardMaterial
        color={snakeCONFIG.colors.snakeSecondCOLOR}
        opacity={snakeCONFIG.opacity}
        transparent
      />
    </mesh>
  )
}

export default SnakeJaw
