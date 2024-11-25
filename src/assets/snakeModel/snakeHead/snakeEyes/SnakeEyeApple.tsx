import { snakeCONFIG } from '../../../../config/snakeConfig'
import * as VERT from './snakeEyesVertices'
function snakeEyeApple() {
  const { apple } = snakeCONFIG.snakeEYES
  const { color, position, radius } = apple
  return (
    <>
      <mesh position={[VERT.verticesC[0], VERT.verticesC[1], VERT.verticesC[2]]}>
        <sphereGeometry args={[radius, position[0], position[1]]} />
        <meshStandardMaterial
          color={color}
          opacity={snakeCONFIG.snakeOPACITY}
          transparent
        />
      </mesh>
      <mesh position={[VERT.verticesD[0], VERT.verticesD[1], VERT.verticesD[2]]}>
        <sphereGeometry args={[radius, position[0], position[1]]} />
        <meshStandardMaterial
          color={color}
          opacity={snakeCONFIG.snakeOPACITY}
          transparent
        />
      </mesh>
    </>
  )
}

export default snakeEyeApple
