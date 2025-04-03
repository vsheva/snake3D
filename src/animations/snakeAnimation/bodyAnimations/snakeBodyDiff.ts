import { getSnakeBodyCoord, getSnakeHeadParams } from '../../../engine/snake/snake'
import { getDiff, setDiff } from './snakeDiff'

function snakeBodyDiff(index: number) {
  let { diffX, diffY } = getDiff()[index]
  if (index !== 0 && index !== getDiff().length - 1) {
    diffX = getSnakeBodyCoord()[index - 1][0] - getSnakeBodyCoord()[index][0]
    diffY = getSnakeBodyCoord()[index - 1][1] - getSnakeBodyCoord()[index][1]
  } else if (index === 0) {
    diffX = getSnakeHeadParams().snakeHeadStepX
    diffY = getSnakeHeadParams().snakeHeadStepY
  } else {
    diffX = 0
    diffY = 0
  }

  setDiff({ diffX, diffY }, index)
}

export default snakeBodyDiff
