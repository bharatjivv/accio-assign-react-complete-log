
import React from "react";
import './../styles/App.css';
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./Store/CounterSlice";

const App = () => {
  const counter = useSelector((store)=>store.counter)
  console.log(counter)
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{counter.count}</h1>
      <button onClick={()=>dispatch(increment())}>increment</button>
      <button onClick={()=>dispatch(decrement())}>decrement</button>
    </div>
  )
}

export default App