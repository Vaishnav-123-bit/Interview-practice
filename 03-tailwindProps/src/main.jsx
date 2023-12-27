import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const reactComponent=React.createElement(
  'a',
  {target:'_blank',href:'https://google.com'},"amka dhamka"
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // reactComponent
  )
