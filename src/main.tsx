import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Home } from './pages/home/home'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)
