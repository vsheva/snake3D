import { snakeDiff } from '../../../types/animationTypes'

/**
 * Массив объектов, хранящих текущие направления движения каждого
 * элемента змейки по вертикали и горизонтали
 */
let snakeDiffArray: snakeDiff[] = [
  { diffX: 0, diffY: 0 },
  { diffX: 0, diffY: 0 },
  { diffX: 0, diffY: 0 },
]

/**
 * Функция вносит текущие направления движения каждого элемента змейки
 * в массив snakeDiffArray. Если длина змейки увеличилась, функция увеличивает
 * длину snakeDiffArray.
 * @param newDiff - объект, хранящих текущие направления движения по вертикали и
 * горизонтали для одного элемента змейки
 * @param index - расположение элемента змейки в массиве snakeDiffArray.
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
