import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(8)
  function addn(){
    setCount(count+1)
  }
  function subtract(){
    setCount(count-1)
  }

  return (
    <>
      <h1>count {count}</h1>
      <div>
        <div>
          <h3>count {count}</h3>
          <button onClick={addn}>+</button>
          <button onClick={subtract}>-</button>
        </div>
      </div>
    </>
  )
}

export default App
