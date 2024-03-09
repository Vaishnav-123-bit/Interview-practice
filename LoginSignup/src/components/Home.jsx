import React from 'react'
import { useLocation } from 'react-router-dom'

const Home = () => {
    const location=useLocation()
  return (
    <div>Hi  welcome home</div>
  )
}

export default Home