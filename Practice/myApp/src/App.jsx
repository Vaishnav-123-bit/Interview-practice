import { useDispatch, useSelector } from 'react-redux'
import React from 'react'
import './App.css'
import {BrowserRouter,Route,Routes} from "react-router-dom"
// import {actions} from './store/index.js'
import Home from './Home.jsx'
import Create from './Create.jsx'
import Update from './Update.jsx'

function App() {
  // const counter=useSelector((state)=>state.counter)
  // const dispatch=useDispatch();
  // const increment=()=>{
  //   dispatch(actions.increment())
  // }
  // const decrement=()=>{

  // }
  // const add=()=>{
  //   dispatch(actions.add(10))
  // }
  return (
    <>
      {/* <div>
        {counter}
        <div>
        <button onClick={increment}>1</button>
        <button onClick={decrement}>2</button>
        <button onClick={add}>3</button>
        </div>
        

      </div> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/update/:id' element={<Update/>}/>
          
        </Routes>
      </BrowserRouter>
    
      
    
    
    </>
  )
}

export default App
