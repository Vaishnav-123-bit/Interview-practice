import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const history=useNavigate()
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();
        try{
            await axios.post("http://localhost:8000/",{
            email,password
        })
        .then((res)=>{
            if(res.json=="exists"){
                history('/home',{state:{id:email}})
            }
            else if(res.json=="notexist"){
                alert("plz signin")
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
        <h3>Login</h3>
        <form action="POST">
            <input type="text" onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" name="" id="" onChange={(e)=>setPassword(e.target.value)} />

            <input type="submit" value="" onClick={submit}/>
        </form>

        <br />
        <p>OR</p>
        <br />

        <Link to={'/signup'}>Sign Up</Link>
    </div>
  )
}

export default Login