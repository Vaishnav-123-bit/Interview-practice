import React from 'react'
import { useDispatch } from 'react-redux'
import {logout} from '../feature/User.js'
const Exit = () => {
    const dispatch=useDispatch()
  return (
    <>
        <div>
            <button onClick={()=>dispatch(logout())}>Exit</button>
        </div>
    </>
  )
}

export default Exit