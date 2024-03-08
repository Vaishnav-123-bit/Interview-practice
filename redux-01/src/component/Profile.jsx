import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const user=useSelector((state)=>state.user.value)
  const themeColor=useSelector((state)=>state.theme.value)
  
  return (
    <div style={{color:themeColor}}>
        <h3>Profile</h3>
        <li>Name:{user.name} </li>
        <li>Age:{user.age} </li>
        <li>Email:{user.email} </li>
    </div>
  )
}

export default Profile