import { createRoot } from 'react-dom/client'
import React, { StrictMode } from 'react'
import App from './App'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { store } from './redux'
import './index.scss'

const root = createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <StrictMode>
      <Router>
        <App />
      </Router>
    </StrictMode>
  </Provider>
)
