import {createSlice} from "@reduxjs/toolkit"
import { DataList } from "./DataList"
const UserSlice=createSlice({
    name:"user",
    initialState:DataList,
    reducers:{
        addUser:(state,action)=>{
            state.push(action.payload)
        }
    }
})
export const {addUser}=UserSlice.actions;
export default UserSlice.reducer;