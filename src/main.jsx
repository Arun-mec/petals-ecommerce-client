import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { router } from './routes/router'
import './index.css'
import Homepage from './pages/Home/Homepage'

const router = createBrowserRouter([
  {
      path : "",
      element : <Homepage />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
