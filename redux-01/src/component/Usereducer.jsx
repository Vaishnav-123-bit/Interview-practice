import React from 'react'
import { useReducer } from 'react'
const reducer=(state,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return{
                count:state.count+1,showText:!state.showText
            }
        default:
            return{
                state
            }    
    }   
}

const Usereducer = () => {
    const[state,dispatch]=useReducer(reducer,{count:0,showText:true})
  return (
    <>
        <h3>count :{state.count}</h3>
        <button onClick={()=>dispatch({type:"INCREMENT"})}>he button</button>
        {state.showText && <span>This text</span>}
    </>
  )
}

export default Usereducer