import { snakeCONFIG } from '../../../../config/snakeConfig'
import * as VERT from './snakeEyesVertices'
function snakeEyePupil() {
  const { pupil } = snakeCONFIG.snakeEYES
  const { color, position, radius } = pupil
  return (
    <>
      <mesh position={[VERT.verticesA[0], VERT.verticesA[1], VERT.verticesA[2]]}>
        <sphereGeometry args={[radius, position[0], position[1]]} />
        <meshStandardMaterial
          color={color}
          opacity={snakeCONFIG.snakeOPACITY}
          transparent
        />
      </mesh>
      <mesh position={[VERT.verticesB[0], VERT.verticesB[1], VERT.verticesB[2]]}>
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

export default snakeEyePupil
