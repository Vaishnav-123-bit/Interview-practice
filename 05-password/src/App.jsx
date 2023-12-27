import { useCallback, useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const passwordRef=useRef()
  const [length, setlength] = useState(8);
  const[numberAllow,setNumberAllow]=useState(false)
  const[charAllow,setCharAllow]=useState(false)
  const[password,setPassword]=useState('')
  const passwordGenerator=useCallback(()=>{
    let pass=''
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllow) str+="0123456789"
    if(charAllow) str+="!@#$%^&*-_+=[]{}~`"

    for(let i=1;i<=length;i++){
      const chars=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(chars)
    }
    setPassword(pass)
  },[length,charAllow,numberAllow,setPassword])

  useEffect(()=>{
      passwordGenerator()
  },[length, numberAllow, charAllow, passwordGenerator])

  return (
    <div className="border p-5">
      <h2 className="font-bold items-center justify-center ">
        Password Generator 
      </h2>
      <div className="border p-8">
        <div className="border">
          <input value={password} type="text" placeholder="pasword" ref={passwordRef} />
        </div>
        <div className=" border flex items-center w-full">
          <input onChange={(e)=>setlength(e.target.value)} max={20} min={8} className=" m-3" type="range" />
          <p className="ml-1">Length {length}</p>
          <input onChange={()=>setNumberAllow((prev)=>!prev)} className="ml-5 mr-1" type="checkbox" name="" id="" />
          <label htmlFor="">number</label>
          <input onChange={()=>setCharAllow((prev)=>!prev)} className="ml-5 mr-1" type="checkbox" name="" id="" />
          <label htmlFor="">characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
