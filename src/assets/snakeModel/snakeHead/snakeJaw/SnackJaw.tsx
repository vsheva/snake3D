// import { getSnakeOpacity } from "../../../../Components/Snake/setSnakeOpacity";
import { snakeCONFIG } from '../../../../config/snakeConfig'
import { GeometryProps } from '../../../../types/threeTypes'
import SnakeJawGeometry from './SnakeJawGeometry'
function SnakeJaw(/*props: GeometryProps*/) {
  return (
    <mesh /*{...props}*/>
      <SnakeJawGeometry />
      <meshStandardMaterial
        color={snakeCONFIG.snakeSecondCOLOR}
        opacity={snakeCONFIG.snakeOPACITY}
        transparent
      />
    </mesh>
  )
}

export default SnakeJaw
