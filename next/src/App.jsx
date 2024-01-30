import React, { useState } from 'react'
import ToDo from './components/ToDo'
import './App.css'
import ToDOlist from './components/ToDOlist'


const App = () => {
  const[list,setTodo]=useState([])
  let addList=({inputText})=>{
    setTodo([...list,inputText ])
  }
  const deleteListItem=(key)=>{
    const newList=[...list]
    newList.splice(key,1)
    setTodo([...newList])
  }
  return (
    <div className="main-container">
      <div className="center-container">
        <ToDo addList={addList}/>
        <h1 className='app-heading'>Todo</h1>
        <hr />
        {
          list.map((l,idx)=>{
            return(
              <ToDOlist key={idx} item={l} deleteItem={deleteListItem} index={idx}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default App