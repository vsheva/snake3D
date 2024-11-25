import { useControls } from 'leva'
import SnakeScull from './snakeScull/SnakeScull'
import SnakeEyes from './snakeEyes/SnakeEyes'
import SnakeJaw from './snakeJaw/SnackJaw'
import SnakeTongue from './snakeTongue/snakeTongue'
import { GeometryProps } from '../../../types/threeTypes'
import { snakeCONFIG } from '../../../config/snakeConfig'
import { Vector3 } from 'three'
function SnakeHead(/*props: GeometryProps*/) {
  const { positionX, positionY, positionZ, rotationX, rotationY, rotationZ, scale } =
    useControls('Scull', {
      positionX: 0,
      positionY: 0,
      positionZ: 0.25,
      rotationX: 0,
      rotationY: 0,
      rotationZ: 54.98,
      scale: 0.4,
    })
  return (
    <group /*{...props}*/>
      <SnakeScull
        // {...snakeCONFIG.snakeHEAD.shape.scull}
        position={new Vector3(positionX, positionY, positionZ)}
        rotation-x={rotationX}
        rotation-y={rotationY}
        rotation-z={rotationZ}
        scale={scale}
      />
      {/*
            <SnakeEyes
        {...snakeCONFIG.snakeHEAD.shape.eyes}
        // position={[0.05, 0.04, -0.54]}
        // rotation-x={23}
        // rotation-y={0.04}
        // rotation-z={55}
        // scale={0.4}
      />
      <SnakeJaw
        {...snakeCONFIG.snakeHEAD.shape.jaw}
        // position={[0.07, 0.005, 0.14]}
        // rotation-x={0}
        // rotation-y={0}
        // rotation-z={54.95}
        // scale={0.4}
      />
      <SnakeTongue
        {...snakeCONFIG.snakeHEAD.shape.tongue}
        // position={[0.05, 0.2, 0]}
        // rotation-x={0}
        // rotation-y={0}
        // rotation-z={22}
        // scale={0.2}
      />
*/}
    </group>
  )
}

export default SnakeHead
