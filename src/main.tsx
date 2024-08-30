import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Providers } from './components/Providers/Providers.tsx'
import App from './App.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>,
)
