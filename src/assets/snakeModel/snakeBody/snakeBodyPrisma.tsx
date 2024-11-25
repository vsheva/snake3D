import { GeometryProps } from '../../../types/threeTypes'
import SnakeBodyGeometry from './snakeBodyGeometry'
import { snakeCONFIG } from '../../../config/snakeConfig'
export function SnakeBodyRightPrisma(/*props: GeometryProps*/) {
  return (
    <mesh receiveShadow castShadow /*{...props}*/>
      <SnakeBodyGeometry />
      <meshStandardMaterial
        color={snakeCONFIG.snakeFirstCOLOR}
        opacity={snakeCONFIG.snakeOPACITY}
        transparent
      />
    </mesh>
  )
}

export function SnakeBodyLeftPrisma(/*props: GeometryProps*/) {
  return (
    <mesh receiveShadow castShadow /*{...props}*/>
      <SnakeBodyGeometry />
      <meshStandardMaterial
        color={snakeCONFIG.snakeSecondCOLOR}
        opacity={snakeCONFIG.snakeOPACITY}
        transparent
      />
    </mesh>
  )
}
