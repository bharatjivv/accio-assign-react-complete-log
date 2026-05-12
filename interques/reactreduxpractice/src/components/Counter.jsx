import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, resetValue } from '../features/counterSlice'


const Counter = () => {
  const count = useSelector((state) => state.value)
  const dispatch = useDispatch()

  const [input, setInput] = useState(0)
  return (
    <div>
      {count}
      <br />
      <input type='number' value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => dispatch(incrementByAmount(Number(input)))}>Increment By Value</button>
      <br />
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(resetValue())}>Reset</button>

    </div>
  )
}

export default Counter