import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { router } from './lib/router'
import store from '../store'
import AppProviders from './contexts/AppProviders'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
      <PayPalScriptProvider>
        <AppProviders>
          <RouterProvider router={router} />
        </AppProviders>
      </PayPalScriptProvider>
    </Provider>
  </StrictMode>
)
