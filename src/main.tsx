import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthProvider } from './context/AuthContext.tsx'
import { TodoProvider } from './context/TodoContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <AuthProvider>
      <TodoProvider>
        <App />
      </TodoProvider>
    </AuthProvider>
  </StrictMode>,
)
