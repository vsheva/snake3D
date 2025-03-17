#comments

Модуль snakeAnimation - [[объектный модуль]]

<span style="color:red">TODO!!!</span>
**Модуль должен хранить массив объектов, длиной, равной текущей длине змейки. Каждый объект содержит { ==previousStepX==, ==previousStepY== }. В исходном состоянии свойства объектов равны нулю.**
Получить текущую длину змейки можно из функции ==getSnakeBodycoord()==



Функция ==snakeAnimation== -[[управляющая функция]]. 


Функция ==snakeAnimation== перед каждым рендером определяет направление смещения выбранного элемента змейки (головы, каждого сегмента тела или хвоста).


###### ПОЛУЧАЕТ:
    delta -  параметр часов хука useFrame() R3F, показывающий, сколько миллисекунд
    		прошло с момента последнего рендера

###### ВЫЗЫВАЕТ:

###### АЛГОРИТМ:

###### ВЫЗВРАЩАЕТ:

создаёт массив

```js
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

let previousStepX = 0
let previousStepY = 0

export const snakeAnimation = (delta: number) => {
  let snakeSteps = {
    previousStepX,
    previousStepY,
    currentStepX: previousStepX,
    currentStepY: previousStepY,
  }
  if (!checkTimerStep()) {
    snakeSteps = snakeStepSetting(snakeSteps)
    // snakeHeadLocation(snakeSteps, delta)
    snakeBodyLocation(snakeSteps, delta)
    // snakeHeadTurnaround(snakeSteps)
    snakeBodyTurnaround(snakeSteps)
    snakeTailTurnaround(snakeSteps)

    previousStepX = snakeSteps.currentStepX
    previousStepY = snakeSteps.currentStepY
    //snakeHeadMoving(snakeSteps, delta)
    snakeBodyMoving(snakeSteps, delta)
  }
  // console.log(snakeSteps)

  return snakeSteps
}
```
