/**
 * @module snakeStepSetting.ts Задает направление движения головы змейки при рендере
 *    @function snakeStepSetting Передает рендеру команды игрока
 */
import { getProtocol } from '../../engine/protocol/protocol'
import { getSnakeHeadParams } from '../../engine/snake/snake'
import { snakeSteps } from '../../types/animationTypes'
import { getCounterHead } from './headAnimations/snakeHeadLocation'
/**
 * Задает направление движения головы змейки при рендере по данным движка.
 * @param step Текущее и предыдущее направления движения головы змейки
 *             при рендера по осям X и Y
 * @description
 * 1. Функция работает только в момент нахождения рендера в узлах игрового поля
 * 2. Здесь рендер получает текущее направление движения головы змейки от движка
 * 3. При быстрой смене направлений рендер теряет промежуточные команды и может
 *    начать движение в обратном направлении, что приводит к ошибке. На этом этапе
 *    запрещается движение змейки в обратном направлении.
 * @returns step, содержащий актуальные данные о направлении движения головы змейки
 *                с учетом корректировки
 */
export const snakeStepSetting = (step: snakeSteps): snakeSteps => {
  // Функция работает только в момент нахождения рендера в узлах игрового поля
  if (getCounterHead()[0] === 0 && getCounterHead()[1] === 0) {
    // Здесь рендер получает текущее направление движения головы змейки от движка
    step.currentStepX = getSnakeHeadParams().snakeHeadStepX
    step.currentStepY = getSnakeHeadParams().snakeHeadStepY
  }
  // На этом этапе запрещается движение змейки в обратном направлении
  if (step.currentStepX !== 0 && step.currentStepX === -step.previousStepX) {
    step.currentStepX = 0
    step.currentStepY = +getProtocol()[getProtocol().length - 2].value
  }
  if (step.currentStepY !== 0 && step.currentStepY === -step.previousStepY) {
    step.currentStepY = 0
    step.currentStepX = +getProtocol()[getProtocol().length - 2].value
  }

  return step
}
