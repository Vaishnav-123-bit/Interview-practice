import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {configureStore} from "@reduxjs/toolkit"
import { Provider } from 'react-redux'

import UseReducer from './UseReducer.jsx'
// import  store from './store'
const store=configureStore({
  reducer:{
    //users
    users:UseReducer
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
)
