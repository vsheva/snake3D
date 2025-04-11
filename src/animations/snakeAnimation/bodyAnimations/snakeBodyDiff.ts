import { getSnakeBodyCoord, getSnakeHeadParams } from '../../../engine/snake/snake'
import { getCounterHead } from '../headAnimations/snakeHeadLocation'
import { getDiff, setDiff } from './snakeDiff'

function snakeBodyDiff(index: number) {
  let { diffX, diffY } = getDiff()[index]
  const [counterHeadX, counterHeadY] = getCounterHead()
  if (counterHeadX === 0 && counterHeadY === 0) {
    if (
      getSnakeHeadParams().snakeHeadStepX !== 0 ||
      getSnakeHeadParams().snakeHeadStepY !== 0
    )
      if (index !== 0) {
        // console.log(index, ' : ', getSnakeBodyCoord()[index])
        diffX = getSnakeBodyCoord()[index - 1][0] - getSnakeBodyCoord()[index][0]
        diffY = getSnakeBodyCoord()[index - 1][1] - getSnakeBodyCoord()[index][1]
      } else {
        // console.log(index, ' : ', getSnakeBodyCoord()[index])
        diffX = getSnakeHeadParams().snakeHeadStepX
        diffY = getSnakeHeadParams().snakeHeadStepY
      }

    setDiff({ diffX, diffY }, index)
  }
}

export default snakeBodyDiff
