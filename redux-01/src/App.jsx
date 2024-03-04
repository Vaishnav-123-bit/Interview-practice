import { useEffect, useLayoutEffect, useReducer, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"
import Button from './component/Button'
import Context from './component/Context'
import ClassBase from './component/ClassBase'

const reducer=(state,action)=>{
  switch(action.type){
    case "INCREMENT":
      return{count:state.count+1, showText:!state.showText}

    default :
      return state
  }

}
function App() {
  const [state,dispatch]=useReducer(reducer,{count:0,showText:true})
  const[news,setNews]=useState([])

  const inputRef=useRef(null)
  // const focusRef=()=>{
  //   inputRef.current.focus()
  // }
  // const ButtonRef=useRef(null)

 
    // useLayoutEffect(()=>{
    //   console.log(inputRef.current.value)
    // },[])

    // useEffect(()=>{
    //   inputRef.current.value="amka dhamka"
    // },[])
  

  // useEffect(()=>{
  //   axios
  //   .get("https://jsonplaceholder.typicode.com/comments")
  //   .then((res)=>{
  //     const imp=res.data;
  
  //     setNews(imp)

  //   }
 

  //   )
   
  // },[])
  return (
    <>
      <div>
        <h1>{state.count}</h1>
        <button onClick={()=>dispatch({type:"INCREMENT"})}></button>
        <h4>{state.showText && <p>this text</p>}</h4>
      </div>
        {/* {console.log(news,"data frrom vrtun")}
        {news.map((list)=>(
          <li key={list.id} max={10}>
            <ul>{list.name}</ul>
            <h3>{list.email}</h3></li>
        ))} */}
      {/* <div>

        <div>
          <input type="text" placeholder='ithu ' value={'ithub'} ref={inputRef} />
          <button >Dab</button>
        </div>

      </div> */}

      {/* <div>
        <button onClick={()=>ButtonRef.current.alterToggle()}>Parent</button>
        <Button ref={ButtonRef}/>
      </div> */}


      {/* <Context/> */}
      <ClassBase/>
    </>
  )
}

export default App
