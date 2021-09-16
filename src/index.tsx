import React from 'react'
import ReactDOM from 'react-dom'
import { ToastContainer } from 'react-toastify'

import './index.css'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <ToastContainer
        limit={1}
        position="bottom-center"
        autoClose={4000}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
        className="TDToast"
      />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
