import { setSnakePosition } from '../../../engine/snake/setSnakePosition'
import checkTimerStep from '../../../engine/time/checkTimerStep'
import { snakeSteps } from '../../../types/animationTypes'
import { getSnakeSpeed } from '../snakeSpeedSetting'

/**
 * @var счетчик шагов головы 3D змейки по оси X
 */
let counterHeadX = 0
/**
 * @var счетчик шагов головы 3D змейки по оси Y
 */
let counterHeadY = 0

/**
 * Проверяет корректность объекта шагов змейки
 * @param steps - объект, хранящий текущие и предыдущие направления движения
 * @returns true, если объект корректен, false в противном случае
 */
const validateSteps = (steps: snakeSteps): boolean => {
  // Проверяем наличие всех необходимых свойств
  if (steps === null || steps === undefined || typeof steps !== 'object') {
    console.error('Error: steps parameter is not an object')
    return false
  }

  // Проверяем наличие и тип всех необходимых свойств
  const requiredProps = ['previousStepX', 'previousStepY', 'currentStepX', 'currentStepY']
  for (const prop of requiredProps) {
    if (!(prop in steps) || typeof steps[prop as keyof snakeSteps] !== 'number') {
      console.error(`Error: steps.${prop} is missing or not a number`)
      return false
    }
  }

  // Проверяем валидность значений шагов (могут быть только -1, 0, 1)
  const stepProps = ['previousStepX', 'previousStepY', 'currentStepX', 'currentStepY']
  for (const prop of stepProps) {
    const value = steps[prop as keyof snakeSteps] as number
    if (value !== -1 && value !== 0 && value !== 1) {
      console.error(
        `Error: steps.${prop} has invalid value ${value}. Must be -1, 0, or 1`
      )
      return false
    }
  }

  // Проверяем, что змейка не движется по диагонали (одновременно по X и Y)
  if (steps.currentStepX !== 0 && steps.currentStepY !== 0) {
    console.error(
      'Error: Snake cannot move diagonally (both currentStepX and currentStepY are non-zero)'
    )
    return false
  }

  return true
}

/**
 * Проверяет корректность параметра delta
 * @param delta - интервал рендера 3D змейки
 * @returns true, если параметр корректен, false в противном случае
 */
const validateDelta = (delta: number): boolean => {
  // Проверяем, что delta это число
  if (typeof delta !== 'number') {
    console.error('Error: delta parameter is not a number')
    return false
  }

  // Проверяем, что delta положительное число
  if (delta <= 0) {
    console.error('Error: delta must be a positive number')
    return false
  }

  // Проверяем, что delta имеет разумное значение (например, не больше 1 секунды)
  if (delta > 1) {
    console.error(
      'Warning: delta is unusually large (> 1). This may cause animation issues'
    )
    // Возвращаем true, так как это предупреждение, а не ошибка
  }

  return true
}

/**
 * 1. Вычисляет значение счётчиков по осям X и Y
 * 2. Проверяет попадание головы 3D змейки в центр клетки
 * 3. Препятствует движению змейки в обратном направлении
 * @param steps - объект, хранящий текущие и предыдущие направления движения головы 3D змейки
 * @param delta - интервал рендера 3D змейки
 */
export const snakeHeadLocation = (steps: snakeSteps, delta: number): void => {
  // Валидация входных параметров
  if (!validateSteps(steps) || !validateDelta(delta)) {
    // В случае ошибки валидации, не меняем состояние счетчиков
    return
  }

  const { previousStepX, previousStepY, currentStepX, currentStepY } = steps
  if (!checkTimerStep()) {
    const moveSpeed = getSnakeSpeed()

    // Дополнительная проверка, что moveSpeed - положительное число
    if (typeof moveSpeed !== 'number' || moveSpeed <= 0) {
      console.error('Error: Invalid snake speed value')
      return
    }

    const nextCounterX = counterHeadX + currentStepX * delta * moveSpeed
    const nextCounterY = counterHeadY + currentStepY * delta * moveSpeed

    // Обрабатываем возможную ошибку от setSnakePosition
    try {
      const { counterX, counterY } = setSnakePosition({
        counterX: nextCounterX,
        counterY: nextCounterY,
      })

      // Проверяем результаты после вызова setSnakePosition
      if (typeof counterX !== 'number' || typeof counterY !== 'number') {
        console.error('Error: setSnakePosition returned invalid counter values')
        return
      }

      // Вычисление условий обратного хода
      const isChangingDirectionFromXtoY =
        previousStepX !== 0 && currentStepX === 0 && currentStepY !== 0
      const isChangingDirectionFromYtoX =
        previousStepY !== 0 && currentStepY === 0 && currentStepX !== 0

      counterHeadX = isChangingDirectionFromXtoY ? 0 : counterX
      counterHeadY = isChangingDirectionFromYtoX ? 0 : counterY
    } catch (error) {
      console.error('Error occurred during position calculation:', error)
      // Не меняем счетчики в случае ошибки
    }
  }
}
/**
 * Возвращает счетчики шагов
 * @returns массив со значениями counterHeadX и counterHeadY
 */
export const getCounterHead = (): number[] => {
  return [counterHeadX, counterHeadY]
}
