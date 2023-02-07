import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppKaty from './AppKaty'
import './index.css'

const root = document.getElementById('root')

createRoot(root).render(
  <StrictMode>
    <AppKaty />
  </StrictMode>
)
