import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import router from './Router/Root/router.jsx'
import { RouterProvider } from 'react-router'
import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();


createRoot(document.getElementById('root')).render(
  <StrictMode>.
    <QueryClientProvider client={QueryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
