import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const reactElements=
  {
    type:'a',
    props:{
      target:'_blank',
      href:'https://google.com'
    },
    children:'click kr bhai'
  }

  const ReactElement = {
        type: 'a',
        props: {
            href: 'https://google.com',
            target: '_blank'
        },
        children: 'Click me to visit google'
    }
    

const anotherElement='Hello'
const reactElement=React.createElement(
  'a',
  {href:'https://google.com',
target:'_blank'},'Click me ',anotherElement
)
ReactDOM.createRoot(document.getElementById('root')).render(
  // 
  reactElement
)
