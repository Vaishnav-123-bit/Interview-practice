import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(8)
  const[tex,setTex]=useState('')
  const[text,setText]=useState('')
 

  return (
   <>
    <div>
      <div>
        <label htmlFor="">Name1</label>
        <input onChange={(e)=>setTex(e.target.value)} type="text" />

      </div>
      <div>
        <label htmlFor="">Second</label>
        <input onChange={(event)=>setText(event.target.value)} type="text" />
      </div>

      <div><h3>{tex} {text}</h3></div>
    </div>
   </>
  )
}

export default App
