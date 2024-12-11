import { snakeCONFIG } from '../../../../config/snakeConfig/snakeCONFIG'
import * as VERT from './snakeEyesVertices'
function snakeEyePupil() {
  const { position, radius } = snakeCONFIG.head.eyes.pupil
  const { snakeThirdCOLOR } = snakeCONFIG.colors
  const { opacity } = snakeCONFIG
  return (
    <>
      <mesh position={[VERT.verticesA[0], VERT.verticesA[1], VERT.verticesA[2]]}>
        <sphereGeometry args={[radius, position[0], position[1]]} />
        <meshStandardMaterial color={snakeThirdCOLOR} opacity={opacity} transparent />
      </mesh>
      <mesh position={[VERT.verticesB[0], VERT.verticesB[1], VERT.verticesB[2]]}>
        <sphereGeometry args={[radius, position[0], position[1]]} />
        <meshStandardMaterial color={snakeThirdCOLOR} opacity={opacity} transparent />
      </mesh>
    </>
  )
}

export default snakeEyePupil
