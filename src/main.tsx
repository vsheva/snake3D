import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './components/Main'
import setLevelEvent from './engine/events/setLevelEvent'
import { disableScrolling } from './commands/disableScrolling'

setLevelEvent(1)
disableScrolling(),
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <Main />
    </React.StrictMode>
  )
