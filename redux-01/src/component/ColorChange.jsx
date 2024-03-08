import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeColor } from '../feature/themeSlice'

const ColorChange = () => {
    const[color,setColor]=useState("")
    const dispatch=useDispatch()
  return (
    <>
        <input type="text" onChange={(e)=>setColor(e.target.value)} />
        <button onClick={()=>dispatch(changeColor(color))}>Color Change</button>
    </>
  )
}

export default ColorChange