import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { router } from './lib/router'
import store from '../store'
import AppProviders from './contexts/AppProviders'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
      <AppProviders>
        <RouterProvider router={router} />
      </AppProviders>
    </Provider>
  </StrictMode>
)
