import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../feature/User'

const Entry = () => {
  const dispatch=useDispatch()
  return (
    <div>
        <button onClick={()=>{
          dispatch(login({name:"Peedro",age:20,email:"abc@email.com"}))
        }}>Login</button>
    </div>
  )
}

export default Entry