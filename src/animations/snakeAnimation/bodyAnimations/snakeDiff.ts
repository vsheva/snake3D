import { snakeDiff } from '../../../types/animationTypes'

// let diffX = 0
// let diffY = 0

let snakeDiffArray: snakeDiff[] = [
  { diffX: 0, diffY: 0 },
  { diffX: 0, diffY: 0 },
  { diffX: 0, diffY: 0 },
]

// export function setDiff(newDiffX: number, newDiffY: number) {
//   diffX = newDiffX
//   diffY = newDiffY
// }

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
