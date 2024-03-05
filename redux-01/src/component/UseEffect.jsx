import axios from 'axios';
import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const[data,setData]=useState([]);
    const[count,setCount]=useState(0)
   useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res)=>{
        const imp=res.data
        setData(imp);
        console.log(data)
    })
   },[count])
  return (
    <>
        <div>
            <h3>{count}</h3>
            <button onClick={()=>setCount(count+1)}></button>
            {data.map((e)=>(
                
                <li key={e.id}>{e.name}</li>
            ))}
        </div>
    </>
  )
}

export default UseEffect