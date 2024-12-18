import { getSnakeHeadParams, setSnakeHeadParams } from './snake'

type positionCounter = {
  counterX: number
  counterY: number
}

export const setSnakePosition = (props: positionCounter): number[] => {
  let { counterX, counterY } = props

  if (Math.abs(counterX) > 1) {
    setSnakeHeadParams({
      ...getSnakeHeadParams(),
      snakeHeadCoordX:
        counterX > 0
          ? getSnakeHeadParams().snakeHeadCoordX + 1
          : getSnakeHeadParams().snakeHeadCoordX - 1,
    })
    counterX = 0
  }
  if (Math.abs(counterY) > 1) {
    setSnakeHeadParams({
      ...getSnakeHeadParams(),
      snakeHeadCoordY:
        counterY > 0
          ? getSnakeHeadParams().snakeHeadCoordY + 1
          : getSnakeHeadParams().snakeHeadCoordY - 1,
    })
    counterY = 0
  }

  return [counterX, counterY]
}
