//Libraries
import React from 'react'
import ReactDOM from 'react-dom'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter } from 'react-router-dom'
//Styles
import './index.css'
import 'react-toastify/dist/ReactToastify.css'
//App Component
import { App } from './App'

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
