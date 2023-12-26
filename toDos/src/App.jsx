import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ToDoProvider } from "./context";
import { TodoForm, TodoItem } from "./components";

function App() {
  const[todos,setToDos]=useState([])
  const addToDo=(todo)=>{
    setToDos((prev)=>[...prev,{id:Date.now(),...todo}])
  }

  const updateToDo=(id,todo)=>{
    setToDos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id?todo:prevTodo)))
  }

  const deleteToDo=(id)=>{
    setToDos((prev)=>prev.filter((todo)=>todo.id!==id))
  }
  const toggleComplete=()=>{
    setToDos((prev)=>prev.map((prevTodo)=>prevTodo.id===id?{...prevTodo,completed:!prevTodo.completed}:prevTodo))
  }

  useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length>0){
      setToDos(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])

  return (
    <ToDoProvider value={{todos,addToDo,updateToDo,deleteToDo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4"><TodoForm/></div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo)=>(<div key={todo.id} className="w-4">
              <TodoItem todo={todo}/>
            </div>))}
          </div>
        </div>
      </div>
    </ToDoProvider>
  );
}

export default App;
