/**
 *  @module setLevelEvent.ts Устанавливает уровень в игре
 *     @function setLevelEvent Создание нового уровня
 */
import { setCurrentLevel } from '../levels/currentLevel'
import loadLevelProps from '../levels/loadLevelProps'
import { setMaxLevel } from '../levels/maxLevel'
import protocolExecutor from '../protocol/protocolExecutor'
/**
 *  Задает уровень в игре
 * @param level номер уровня, который загружается в игру
 * @description
 * 1. Задает максимальный уровень
 * 2. Устанавливает стартовый уровень и его настройки
 * 3. Фиксирует событие запуска уровня в игре
 */
function setLevelEvent(level: number): boolean {
  if (!Number.isInteger(level) || level < 1) {
    throw new Error('Level must be a positive integer')
  }
  try {
    setMaxLevel()
    setCurrentLevel(level)
    loadLevelProps(level)
    protocolExecutor({
      name: 'start level',
      value: level,
    })
  } catch (error) {
    console.error(`Error setting level ${level}:`, error)
    throw error
  }

  return true
  // setMaxLevel()
  // setCurrentLevel(level)
  // loadLevelProps(level)
  // protocolExecutor({
  //   name: 'start level',
  //   value: level,
  // })
}

export default setLevelEvent
