import { snakeCONFIG } from '../../../../config/snakeConfig/snakeCONFIG'
import SnakeEyeApple from './SnakeEyeApple'
import SnakeEyePupil from './SnakeEyePupil'
function SnakeEyes() {
  return (
    <group {...snakeCONFIG.head.eyes.eyes}>
      <SnakeEyeApple />
      <SnakeEyePupil />
    </group>
  )
}

export default SnakeEyes
