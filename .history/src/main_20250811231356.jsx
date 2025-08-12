import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import router from './Router/Root/router.jsx'
import { RouterProvider } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="max-w-7xl mx-auto border-red"
    >
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
