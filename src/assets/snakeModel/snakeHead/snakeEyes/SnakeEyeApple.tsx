import { snakeCONFIG } from '../../../../config/snakeConfig/snakeCONFIG'
import * as VERT from './snakeEyesVertices'
function snakeEyeApple() {
  const { position, radius } = snakeCONFIG.head.eyes.apple
  const { snakeFourthCOLOR } = snakeCONFIG.colors
  const { opacity } = snakeCONFIG
  return (
    <>
      <mesh position={[VERT.verticesC[0], VERT.verticesC[1], VERT.verticesC[2]]}>
        <sphereGeometry args={[radius, position[0], position[1]]} />
        <meshStandardMaterial color={snakeFourthCOLOR} opacity={opacity} transparent />
      </mesh>
      <mesh position={[VERT.verticesD[0], VERT.verticesD[1], VERT.verticesD[2]]}>
        <sphereGeometry args={[radius, position[0], position[1]]} />
        <meshStandardMaterial color={snakeFourthCOLOR} opacity={opacity} transparent />
      </mesh>
    </>
  )
}

export default snakeEyeApple
