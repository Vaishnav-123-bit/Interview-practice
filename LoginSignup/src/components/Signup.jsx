import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

const Signup = () => {
    const history=useNavigate()
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();
        try{
            await axios.post("http://localhost:8000/signup",{
            email,password
        })
        .then((res)=>{
            if(res.json=="exists"){
                alert('User laready exists')
                // history('/home',{state:{id:email}})
            }
            else if(res.json=="notexist"){
                alert("plz signin")
                history('/home',{state:{id:email}})

            }
        })
        .catch((e)=>{
            alert('wrong details')
            console.log(e)
        })

        }catch(error){
            console.log(error)
        }

    }
  return (
    <div className='login'>
        <h3>Sign up </h3>
        <form action="POST">
            <input type="text" onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" name="" id="" onChange={(e)=>setPassword(e.target.value)} />

            <input type="submit" value="" onClick={submit}/>
        </form>

        <br />
        <p>OR</p>
        <br />

        <Link to={'/'}>Login</Link>
    </div>
  )
}

export default Signup