import { getSnakeBodyCoord, getSnakeHeadParams } from '../../../engine/snake/snake'
import { getDiff, setDiff } from './snakeDiff'

function snakeBodyDiff(index: number) {
  let { diffX, diffY } = getDiff()[index]
  if (index !== 0) {
    diffX = getSnakeBodyCoord()[index][1] - getSnakeBodyCoord()[index - 1][1]
    diffY = getSnakeBodyCoord()[index][0] - getSnakeBodyCoord()[index - 1][0]
  } else {
    diffX = getSnakeHeadParams().snakeHeadStepX
    diffY = getSnakeHeadParams().snakeHeadStepY
  }

  setDiff({ diffX, diffY }, index)
}

export default snakeBodyDiff
