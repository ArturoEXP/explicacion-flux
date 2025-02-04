import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TodoProvider } from './store/TodoStore.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </StrictMode>,
)
