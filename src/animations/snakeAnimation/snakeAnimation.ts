import moveSnake from '../../engine/snake/moveSnake'
import { setSnakePosition } from '../../engine/snake/setSnakePosition'
import checkTimerStep from '../../engine/time/checkTimerStep'
import snakeBodyDiff from './bodyAnimations/snakeBodyDiff'
import { snakeBodyLocation } from './bodyAnimations/snakeBodyLocation'
import { snakeBodyMoving } from './bodyAnimations/snakeBodyMoving'
import { snakeBodyTurnaround } from './bodyAnimations/snakeBodyTurnaround'
import { getDiff } from './bodyAnimations/snakeDiff'
import { getCounterHead, snakeHeadLocation } from './headAnimations/snakeHeadLocation'
import { snakeHeadMoving } from './headAnimations/snakeHeadMoving'
import { snakeHeadTurnaround } from './headAnimations/snakeHeadTurnaround'
import { getSnakeSpeed } from './snakeSpeedSetting'
// import { snakeHeadWaves } from './headAnimations/snakeHeadWaves'
import { snakeStepSetting } from './snakeStepSetting'
import { snakeTailTurnaround } from './tailAnimations/snakeTailTurnaround'
//import { snakeTailWaves } from './tailAnimations/snakeTailWaves'
//import { setTailWavesAmplitude } from './tailAnimations/tailWavesAmplitude'

// let previousStepX = 0
// let previousStepY = 0
let snakePreviousStepsArray = [
  { previousStepX: 0, previousStepY: 0 },
  { previousStepX: 0, previousStepY: 0 },
  { previousStepX: 0, previousStepY: 0 },
]

export const snakeAnimation = (delta: number): void => {
  // let snakeSteps = {
  //   previousStepX,
  //   previousStepY,
  //   currentStepX: previousStepX,
  //   currentStepY: previousStepY,
  // }
  let snakeSteps = snakePreviousStepsArray.map((step) => ({
    previousStepX: step.previousStepX,
    previousStepY: step.previousStepY,
    currentStepX: step.previousStepX,
    currentStepY: step.previousStepY,
  }))

  if (!checkTimerStep()) {
    snakeSteps.forEach((_, index) => snakeBodyDiff(index))
    // console.log(snakeSteps)
    snakeSteps = snakeStepSetting(snakeSteps)

    // const [counterHeadX, counterHeadY] = getCounterHead()
    // console.log({ counterHeadX, counterHeadY })

    // if (counterHeadX >= 0 && counterHeadY >= 0) moveSnake()

    /* snakeBodyLocation(snakeSteps, delta) */

    // snakeHeadTurnaround(snakeSteps)
    /*
    snakeBodyTurnaround(snakeSteps)
    snakeTailTurnaround(snakeSteps)
    */

    snakeBodyMoving(delta)
    snakeHeadMoving(snakeSteps[0], delta)
    snakePreviousStepsArray = snakeSteps.map((step) => {
      step.previousStepX = step.currentStepX
      step.previousStepY = step.currentStepY
      return step
    })
    // previousStepX = snakeSteps.currentStepX
    // previousStepY = snakeSteps.currentStepY
    snakeHeadLocation(snakeSteps[0], delta)

    // snakeBodyMoving(snakeSteps, delta)
  }
  // console.log(snakeSteps)
}
