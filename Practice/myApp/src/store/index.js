
// // import {createStore} from 'redux'

// // const reducerfn=(state ={counter:0},action)=>{
// //     if(action.type==="INC"){
// //         return {counter:state.counter+1};
// //     }
// //     if(action.type==="ADD"){
// //         return{counter:state.counter+action.payload}
// //     }
// //     return state;
// // }

// // const store=createStore(reducerfn)
// // export default store;



// import {createSlice,configureStore} from "@reduxjs/toolkit";
// const counterSlice=createSlice({
//     name:'counter',
//     initialState:{counter:0},
//     reducers:{
//         increment(state,action){
//             state.counter++
//         },
//         add(state,action){
//             state.counter+=action.payload
//         }
//     }
// })
// export const actions=counterSlice.actions;
// const store=configureStore({
//     reducer:counterSlice.reducer
// })
// export default store;


