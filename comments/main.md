main.ts
#comments 
### **Описание кода**

Этот файл инициализирует основное React-приложение, устанавливает уровень и отключает прокрутку, прежде чем отобразить основной компонент. 

```typescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './components/Main'
import setLevelEvent from './engine/events/setLevelEvent'
import { disableScrolling } from './commands/disableScrolling'
```

1. **Импорт библиотек и компонентов**:
   - `React` и `ReactDOM` импортируются для работы с библиотекой React и её функциональностью по рендерингу компонентов.
   - [[<Main />]] — это основной компонент приложения, который будет отображаться на странице.
   - [[setLevelEvent]] и [[disableScrolling]] — функции, которые, настраивают уровень игры и отключают прокрутку страницы соответственно.

```typescript
setLevelEvent(1)
disableScrolling(),
```

2. **Настройка уровня и отключение прокрутки**:
   - `setLevelEvent(1)` устанавливает уровень на 1. 
   - `disableScrolling()` отключает прокрутку страницы, чтобы пользователь всегда оставался на одной и той же части интерфейса игры.

```typescript
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
)
```

3. **Рендеринг компонента**:
   - `ReactDOM.createRoot` создаёт корневой элемент для React-приложения, используя элемент HTML с ID `"root"`.
   - `render` рендерит компонент `Main` внутри `React.StrictMode`, который активирует дополнительные проверки и предупреждения для улучшения качества кода.

