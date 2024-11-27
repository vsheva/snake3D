import { useControls } from 'leva'
import SnakeScull from './snakeScull/SnakeScull'
import SnakeEyes from './snakeEyes/SnakeEyes'
import SnakeJaw from './snakeJaw/SnackJaw'
import SnakeTongue from './snakeTongue/snakeTongue'
import { GeometryProps } from '../../../types/threeTypes'
import { snakeCONFIG } from '../../../config/snakeConfig'
import { Vector3 } from 'three'
function SnakeHead(/*props: GeometryProps*/) {
  // const { positionX, positionY, positionZ, rotationX, rotationY, rotationZ, scale } =
  //   useControls('Tongue', {
  //     positionX: 0,
  //     positionY: 0.35,
  //     positionZ: 0.23,
  //     rotationX: 0,
  //     rotationY: 0,
  //     rotationZ: 22,
  //     scale: 0.2,
  //   })
  return (
    <group /*{...props}*/>
      <SnakeScull {...snakeCONFIG.snakeHEAD.shape.scull} />
      <SnakeEyes {...snakeCONFIG.snakeHEAD.shape.eyes} />
      <SnakeJaw {...snakeCONFIG.snakeHEAD.shape.jaw} />
      <SnakeTongue {...snakeCONFIG.snakeHEAD.shape.tongue} />
    </group>
  )
}

export default SnakeHead
