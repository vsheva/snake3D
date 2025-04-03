import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './components/Main'
import setLevelEvent from './engine/events/setLevelEvent'
import { disableScrolling } from './commands/disableScrolling'

const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('Root element not found')
}

try {
  const levelSet = setLevelEvent(1)
  if (levelSet) {
    disableScrolling()
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <Main />
      </React.StrictMode>
    )
  } else {
    console.warn('Level not set, app not started')
  }
} catch (error) {
  console.error('Error initializing app:', error)
}

// if (setLevelEvent(1)) {
//   disableScrolling()
//   ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//     <React.StrictMode>
//       <Main />
//     </React.StrictMode>
//   )
// }
