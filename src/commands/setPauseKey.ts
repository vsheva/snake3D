import keyboardEvents from '../engine/events/keyboardEvents'
import { keyboardPauseEvent } from '../engine/events/pauseEvent'
import { useMenuStore } from '../store/menuStore'

export const setPauseKey = () => {
  const { titleMenu } = useMenuStore.getState()
  const { isVisible } = useMenuStore()
  if (isVisible) {
    document.removeEventListener('keydown', keyboardEvents)
    if (titleMenu === 'Pause')
      document.addEventListener('keydown', keyboardPauseEvent /* spaceDown */)
  } else {
    if (titleMenu === 'Pause')
      document.removeEventListener('keydown', keyboardPauseEvent /* spaceDown */)
    document.addEventListener('keydown', keyboardEvents)
  }
}
