import { useEffect } from 'react'
import { Scene } from './Scene'
import renderInfo from '../engine/render/renderInfo'
import { useFrame } from '@react-three/fiber'
import setLoop from '../engine/time/setLoop'
import { useMenuStore } from '../store/menuStore'
import keyboardEvents from '../engine/events/keyboardEvents'
import { keyboardPauseEvent } from '../engine/events/pauseEvent'

export const Game = () => {
  const isVisible = useMenuStore((state) => state.isVisible)
  const titleMenu = useMenuStore((state) => state.titleMenu)

  useEffect(() => {
    renderInfo()
  }, [])

  useEffect(() => {
    document.removeEventListener('keydown', keyboardEvents)
    document.removeEventListener('keydown', keyboardPauseEvent)

    if (isVisible && titleMenu === 'Pause') {
      document.addEventListener('keydown', keyboardPauseEvent)
    } else if (!isVisible) {
      document.addEventListener('keydown', keyboardEvents)
    }

    return () => {
      document.removeEventListener('keydown', keyboardEvents)
      document.removeEventListener('keydown', keyboardPauseEvent)
    }
  }, [isVisible, titleMenu])
  useFrame((_, delta) => setLoop(delta))

  return <Scene />
}
