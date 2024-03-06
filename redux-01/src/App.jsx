import {
  useEffect,
  useLayoutEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import axios from "axios"
// import Button from './component/Button'
// // import Context from './component/Context'
// import ClassBase from './component/ClassBase'
// import UseContext from './component/UseContext'
// import Usereducer from './component/Usereducer'
// import UseEffect from './component/UseEffect'
// import Car from './component/Car'
import Profile from "./component/Profile";
import Entry from "./component/Entry";
// import Login from './component/Login'

const reducer=(state,action)=>{
  switch(action.type){
    case "INCREMENT":
      return{count:state.count+1, showText:!state.showText}

    default :
      return state
  }

}
function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
  const [news, setNews] = useState([]);

  const inputRef = useRef(null);
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
    <div className="App">
      <Profile />
      <Entry />
    </div>
  );
}

export default App;
