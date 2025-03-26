import checkTimerStep from '../../engine/time/checkTimerStep'
import { snakeBodyLocation } from './bodyAnimations/snakeBodyLocation'
import { snakeBodyMoving } from './bodyAnimations/snakeBodyMoving'
import { snakeBodyTurnaround } from './bodyAnimations/snakeBodyTurnaround'
import { snakeHeadLocation } from './headAnimations/snakeHeadLocation'
import { snakeHeadMoving } from './headAnimations/snakeHeadMoving'
import { snakeHeadTurnaround } from './headAnimations/snakeHeadTurnaround'
// import { snakeHeadWaves } from './headAnimations/snakeHeadWaves'
import { snakeStepSetting } from './snakeStepSetting'
import { snakeTailTurnaround } from './tailAnimations/snakeTailTurnaround'
//import { snakeTailWaves } from './tailAnimations/snakeTailWaves'
//import { setTailWavesAmplitude } from './tailAnimations/tailWavesAmplitude'

// let previousStepX = 0
// let previousStepY = 0
const snakeStepsArray = [
  { previousStepX: 0, previousStepY: 0 },
  { previousStepX: 0, previousStepY: 0 },
  { previousStepX: 0, previousStepY: 0 },
]

export const snakeAnimation = (delta: number) => {
  // let snakeSteps = {
  //   previousStepX,
  //   previousStepY,
  //   currentStepX: previousStepX,
  //   currentStepY: previousStepY,
  // }
  let snakeSteps = snakeStepsArray.map((step) => ({
    previousStepX: step.previousStepX,
    previousStepY: step.previousStepY,
    currentStepX: step.previousStepX,
    currentStepY: step.previousStepY,
  }))
  if (!checkTimerStep()) {
    snakeSteps = snakeStepSetting(snakeSteps)
    // snakeHeadLocation(snakeSteps, delta)

    /* snakeBodyLocation(snakeSteps, delta) */

    // snakeHeadTurnaround(snakeSteps)
    /*
    snakeBodyTurnaround(snakeSteps)
    snakeTailTurnaround(snakeSteps)
    

    previousStepX = snakeSteps.currentStepX
    previousStepY = snakeSteps.currentStepY
    */
    //snakeHeadMoving(snakeSteps, delta)
    /* snakeBodyMoving(snakeSteps, delta) */
  }
  // console.log(snakeSteps)

  return snakeSteps
}
