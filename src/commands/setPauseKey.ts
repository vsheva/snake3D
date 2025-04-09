import keyboardEvents from '../engine/events/keyboardEvents'
import { keyboardPauseEvent } from '../engine/events/pauseEvent'
import { useMenuStore } from '../store/menuStore'

export const setPauseKey = () => {
  const updateKeyboardListeners = () => {
    // Получаем ВСЕ нужные данные через getState
    const { titleMenu, isVisible } = useMenuStore.getState()

    // ВСЕГДА удаляем оба слушателя перед добавлением нужного
    document.removeEventListener('keydown', keyboardEvents)
    document.removeEventListener('keydown', keyboardPauseEvent)

    if (isVisible) {
      // Если меню видимо, добавляем слушатель паузы, ТОЛЬКО если это меню паузы
      if (titleMenu === 'Pause') {
        document.addEventListener('keydown', keyboardPauseEvent)
      }
      // Для других видимых меню слушатели не добавляются (или добавляются другие, если нужно)
    } else {
      // Если меню не видимо, возвращаем основной слушатель игры
      document.addEventListener('keydown', keyboardEvents)
    }
  }
  // const { titleMenu } = useMenuStore.getState()
  // const { isVisible } = useMenuStore()
  // if (isVisible) {
  //   document.removeEventListener('keydown', keyboardEvents)
  //   if (titleMenu === 'Pause')
  //     document.addEventListener('keydown', keyboardPauseEvent /* spaceDown */)
  // } else {
  //   if (titleMenu === 'Pause')
  //     document.removeEventListener('keydown', keyboardPauseEvent /* spaceDown */)
  //   document.addEventListener('keydown', keyboardEvents)
  // }
}
