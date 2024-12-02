import SnakeScull from './snakeScull/SnakeScull'
import SnakeEyes from './snakeEyes/SnakeEyes'
import SnakeJaw from './snakeJaw/SnackJaw'
import SnakeTongue from './snakeTongue/snakeTongue'
import { snakeCONFIG } from '../../../config/snakeConfig/snakeCONFIG'
function SnakeHead() {
  return (
    <group {...snakeCONFIG.head.head}>
      <SnakeScull />
      <SnakeEyes />
      <SnakeJaw />
      <SnakeTongue />
    </group>
  )
}

export default SnakeHead
