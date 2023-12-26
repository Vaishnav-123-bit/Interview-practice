import { createContext, useContext } from "react";

export const ToDoContext=createContext({
    todos:[
        {
            id:1,
            todo:"msg1",
            completed:false
        },{}
    ],
    addToDo:(todo)=>{},
    updateToDo:(id,todo)=>{},
    deleteToDo:(id)=>{},
    toggleComplete:()=>{}
})
export const useToDo=()=>{
    return useContext(ToDoContext)
} 
export const ToDoProvider=ToDoContext.Provider