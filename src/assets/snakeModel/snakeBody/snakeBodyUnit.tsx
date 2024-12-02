import { GeometryProps } from '../../../types/threeTypes'
import SnakeBodyGeometry from './snakeBodyGeometry'
import { snakeCONFIG } from '../../../config/snakeConfig/snakeCONFIG'

function SnakeBodyRightPrisma() {
  return (
    <mesh {...snakeCONFIG.body.right} receiveShadow castShadow>
      <SnakeBodyGeometry />
      <meshStandardMaterial
        color={snakeCONFIG.colors.snakeFirstCOLOR}
        opacity={snakeCONFIG.opacity}
        transparent
      />
    </mesh>
  )
}

function SnakeBodyLeftPrisma() {
  return (
    <mesh {...snakeCONFIG.body.left} receiveShadow castShadow>
      <SnakeBodyGeometry />
      <meshStandardMaterial
        color={snakeCONFIG.colors.snakeSecondCOLOR}
        opacity={snakeCONFIG.opacity}
        transparent
      />
    </mesh>
  )
}

function SnakeBodyUnit(/*props: GeometryProps*/) {
  return (
    <group /*{...props}*/>
      <SnakeBodyRightPrisma />
      <SnakeBodyLeftPrisma />
    </group>
  )
}

export default SnakeBodyUnit
