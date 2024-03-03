import React, { useContext } from 'react'
import { AppContext } from './Context'

const User = () => {
    const {username}=useContext(AppContext)
  return (
    <>
        <h3>user : {username}</h3>
    </>
  )
}

export default User