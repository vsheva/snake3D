/**
 * @module moveSnake.ts Управляет движением змейки
 *    @function moveSnake Двигает змейку по игровому полю
 */
import { getCounterHead } from '../../animations/snakeAnimation/headAnimations/snakeHeadLocation'
import { getPositionHead } from '../../animations/snakeAnimation/headAnimations/snakeHeadProps'
import allContactEvents from '../events/allContactEvents'
import { breakContact } from '../events/isContact'
import { getField } from '../field/fieldPerLevel'
import { checkMistake } from '../lives/isMistake'
import { checkTimerWorking, startTimer } from '../time/isTimer'
import * as SNAKE from './snake'
/**
 * Изменяет координаты головы и тела змейки по осям только во время игры
 * @description
 * 1. Извлекает из модуля snake параметры головы змейки
 * 2. Если происходит перемещение змейки:
 *    - изменяет координаты ее головы по осям
 *    - останавливает голову змейки после запрещенного контакта
 *    - вносит новые параметры головы обратно в модуль snake
 *    - пересчитывает координаты тела змейки:
 *        * смещает координаты каждого элемента на одну позицию назад
 *        * на место первого элемента вводит текущие координаты головы змейки
 *    - вносит новые координаты тела змейки в модуль snake
 */
function moveSnake(): void {
  const [counterHeadX, counterHeadY] = getCounterHead()

  if (counterHeadX === 0 && counterHeadY === 0) {
    if (checkTimerWorking()) {
      let snakeHead = {
        snakeHeadCoordX: (getField() + 1) / 2 + Math.round(getPositionHead()[0]),
        snakeHeadCoordY: (getField() + 1) / 2 + Math.round(getPositionHead()[1]),
        snakeHeadStepX: SNAKE.getSnakeHeadParams().snakeHeadStepX,
        snakeHeadStepY: SNAKE.getSnakeHeadParams().snakeHeadStepY,
      }
      const newBodyCoord = [...SNAKE.getSnakeBodyCoord()]
      let { snakeHeadCoordX, snakeHeadCoordY, snakeHeadStepX, snakeHeadStepY } = snakeHead
      if (snakeHeadStepX !== 0 || snakeHeadStepY !== 0) {
        const potentialSnakeHeadCoord = {
          snakeHeadCoordX: snakeHeadCoordX + snakeHeadStepX,
          snakeHeadCoordY: snakeHeadCoordY + snakeHeadStepY,
          snakeHeadStepX: snakeHeadStepX,
          snakeHeadStepY: snakeHeadStepY,
        }
        const nextSnakeHeadCoord = allContactEvents(potentialSnakeHeadCoord)
        if (
          nextSnakeHeadCoord.snakeHeadCoordX !==
            potentialSnakeHeadCoord.snakeHeadCoordX ||
          nextSnakeHeadCoord.snakeHeadCoordY !== potentialSnakeHeadCoord.snakeHeadCoordY
        ) {
          snakeHead = {
            ...nextSnakeHeadCoord,
            snakeHeadStepX: 0,
            snakeHeadStepY: 0,
          }
          for (let i = newBodyCoord.length - 1; i > 0; i--)
            newBodyCoord[i] = newBodyCoord[i - 1]
          newBodyCoord[0] = [snakeHeadCoordX, snakeHeadCoordY]

          SNAKE.setSnakeBodyCoord(newBodyCoord)
        }
        console.log(snakeHead)
        SNAKE.setSnakeHeadParams(snakeHead)
        breakContact()

        console.log(newBodyCoord[0], newBodyCoord[1], newBodyCoord[2])
        if (checkTimerWorking() && !checkMistake()) {
          console.log('move')

          for (let i = newBodyCoord.length - 1; i > 0; i--)
            newBodyCoord[i] = newBodyCoord[i - 1]
          newBodyCoord[0] = [snakeHeadCoordX, snakeHeadCoordY]

          SNAKE.setSnakeBodyCoord(newBodyCoord)
        } else startTimer()
      }
    }
  }
}

export default moveSnake
