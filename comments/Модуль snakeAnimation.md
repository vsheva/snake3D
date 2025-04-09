#comments

# Модуль snakeAnimation - [[объектный модуль]]

## <span style="color:red">TODO!!!</span>
**Модуль должен хранить массив объектов, длиной, равной текущей длине змейки. Каждый объект содержит { ==previousStepX==, ==previousStepY== }. В исходном состоянии свойства объектов равны нулю, а длина массива - 3.**
```js
const snakeStepsArray = [
  { previousStepX: 0, previousStepY: 0 },
  { previousStepX: 0, previousStepY: 0 },
  { previousStepX: 0, previousStepY: 0 },
]
```
<span style="color:red">DONE!!!</span>
# Функция ==snakeAnimation==-[[управляющая функция]]. 

### <span style="color:red">TODO!!!</span>
**В начале функции выполняется действие для единичного объекта:**
```js
let snakeSteps = {
    previousStepX,
    previousStepY,
    currentStepX: previousStepX,
    currentStepY: previousStepY,
  }
```
**Переписать это действие для всех элементов массива ==snakeStepsArray==**
```js
let snakeSteps = snakeStepsArray.map((step) => ({
    previousStepX: step.previousStepX,
    previousStepY: step.previousStepY,
    currentStepX: step.previousStepX,
    currentStepY: step.previousStepY,
  }))
```
<span style="color:red">DONE!!!</span>

### <span style="color:red">TODO!!!</span>
**В начале функции выполняется действие для единичного объекта:**
```js
let snakeSteps = {
    previousStepX,
    previousStepY,
    currentStepX: previousStepX,
    currentStepY: previousStepY,
  }
```
**Переписать это действие для всех элементов массива ==snakeStepsArray==**


### ОПИСАНИЕ:
	
	В игре возможно движение только по вертикали, или горизонтали.
	
	Функция перед каждым рендером определяет направление движения
	каждого элемента змейки (головы, сегментов тела и хвоста) в виде шага
	
	Если шаги по вертикали и горизонтали равны нулю - элемент змейки неподвижен. 
	Если шаг по вертикали равен 1, элемент движется вверх, если -1, то вниз.
	Если шаг по горизонтали равен 1, злемент движется вправо, если -1, то влево. 
	Возможны только следующие комбинации: [0,0], [0,1], [0,-1], [1,0], [-1,0].

### ПОЛУЧАЕТ:
    delta -  параметр часов хука useFrame() R3F, показывающий, сколько миллисекунд
    		прошло с момента последнего рендера

### ВЫЗЫВАЕТ:
[[функция snakeStepSetting()]]
### АЛГОРИТМ:

### ВЫЗВРАЩАЕТ:

### КОД:
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

/* Замена кода */
// let previousStepX = 0
// let previousStepY = 0
const snakeStepsArray = [
  { previousStepX: 0, previousStepY: 0 },
  { previousStepX: 0, previousStepY: 0 },
  { previousStepX: 0, previousStepY: 0 },
]
/***********************/

export const snakeAnimation = (delta: number) => {

/* Замена кода */
  // let snakeSteps = {
  //  previousStepX,
  //  previousStepY,
  //  currentStepX: previousStepX,
  //  currentStepY: previousStepY,
  // }
  let snakeSteps = snakeStepsArray.map((step) => ({
    previousStepX: step.previousStepX,
    previousStepY: step.previousStepY,
    currentStepX: step.previousStepX,
    currentStepY: step.previousStepY,
  }))
  /***********************/
  
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
