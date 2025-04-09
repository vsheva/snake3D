import { snakeDiff } from '../../../types/animationTypes'

// let diffX = 0
// let diffY = 0

/**
 * Массив объектов, хранящих текущие направления движения каждого
 * элемента змейки по вертикали и горизонтали
 */
let snakeDiffArray: snakeDiff[] = [
  { diffX: 0, diffY: 0 },
  { diffX: 0, diffY: 0 },
  { diffX: 0, diffY: 0 },
]

// export function setDiff(newDiffX: number, newDiffY: number) {
//   diffX = newDiffX
//   diffY = newDiffY
// }

/**
 * Функция вносит текущие направления движения каждого элемента змейки
 * в массив snakeDiffArray. Если длина змейки увеличилась, функция увеличивает
 * длину snakeDiffArray.
 * @param newDiff - объект, хранящих текущие направления движения элемента змейки
 * с координатой index по вертикали и горизонтали
 * @param index - координата элемента по длине тела змейки.
 */
export function setDiff(newDiff: snakeDiff, index: number): void {
  if (index === snakeDiffArray.length) {
    snakeDiffArray.push({ diffX: 0, diffY: 0 })
    snakeDiffArray[index - 1] = newDiff
  } else {
    snakeDiffArray[index] = newDiff
  }
}

export function getDiff(): snakeDiff[] {
  return snakeDiffArray
}
