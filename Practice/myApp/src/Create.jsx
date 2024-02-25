import React, { useState } from 'react'
import UseReducer, { addUser } from './UseReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const users=useSelector((state)=>state.users)
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    function handleSubmit(e){
        e.preventDefault();
        dispatch(addUser({id:users[users.length-1].id+1,name,email}))
        navigate('/')
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" onChange={e=>setName(e.target.value)} />

            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" onChange={e=>setEmail(e.target.value)} />
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Create