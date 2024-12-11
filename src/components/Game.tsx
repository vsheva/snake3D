import { setPauseKey } from '../commands/setPauseKey'
import { Scene } from './Scene'
import renderInfo from '../engine/render/renderInfo'
import { useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { setTimer } from '../engine/time/timer'
import { checkTimerWorking } from '../engine/time/isTimer'
import setLoop from '../engine/time/setLoop'
import { setSnakeHeadParams } from '../engine/snake/snake'

export const Game = () => {
  setPauseKey()
  renderInfo()
  //   const [time, setTime] = useState(0)
  useFrame(({ clock }) => {
    setLoop()
    //     const elapsedTime = clock.getElapsedTime()
    //     if (checkTimerWorking()) setTimer(time)
    //     setTime(elapsedTime)
  })
  return <Scene />
}
