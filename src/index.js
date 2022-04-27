import { createRoot } from 'react-dom/client'
import React, { StrictMode } from 'react'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './redux'
import './index.scss'

const root = createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
)
