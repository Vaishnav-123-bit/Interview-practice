import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const user=useSelector((state)=>state.user.value)
  return (
    <div>
        <h3>Profile</h3>
        <li>Name:{user.name} </li>
        <li>Age:{user.age} </li>
        <li>Email: </li>
    </div>
  )
}

export default Profile