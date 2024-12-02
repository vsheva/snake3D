import { snakeCONFIG } from '../../../../../config/snakeConfig/snakeCONFIG'
import SnakeNostrilsGeometry from './SnakeNostrilsGeometry'

function SnakeNostrils() {
  return (
    <mesh receiveShadow castShadow>
      <SnakeNostrilsGeometry />
      <meshStandardMaterial
        color={snakeCONFIG.colors.snakeSecondCOLOR}
        opacity={snakeCONFIG.opacity}
        transparent
      />
    </mesh>
  )
}

export default SnakeNostrils
