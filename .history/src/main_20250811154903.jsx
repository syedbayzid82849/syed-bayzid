import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import router from './Router/Root/router.jsx'
import { RouterProvider } from 'react-router'
import { TooltipProvider } from 'react-tooltip'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TooltipProvider>
        <Toaster />
        <Sonner />
      <div className="max-w-6xl mx-auto">
        <RouterProvider router={router} />
      </div>
    </TooltipProvider>
  </StrictMode>,
)
