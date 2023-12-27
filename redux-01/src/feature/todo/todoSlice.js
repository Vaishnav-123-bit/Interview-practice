import {createSlice,nanoid} from '@reduxjs/toolkit'

const initialState={
    todos:[
        {
            id:1,
            text:"Hello"
        }
    ]
}


export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        //properties & functions

        //state-current state  action - data to be passed

        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload  //payload - object
            }
            state.todos.push(todo)
        },
        removeTodo:()=>{
            state.todos=state.todos.filter((todo)=>todo.id !== action.payload)
        }
    }
}) 

export const {addTodo,removeTodo}=todoSlice.actions
export default todoSlice.reducer