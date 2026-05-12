import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increaseValue, decreaseValue, setValue, resetValue } from '../features/counterSlice';

const Counter = () => {
    const [input, setInput] = useState(0)
    // console.log(input, typeof input)
    const counterValue = useSelector((state) => state.counterVal);
    const dispatch = useDispatch();
    // console.log(counterValue).

    const handleCounter = () => {
        dispatch(setValue(Number(input)))
        setInput(0);
    }

  return (
    <div>
        <h3>Counter - {counterValue}</h3>
        <button onClick={() => dispatch(increaseValue())}>Increment Value</button>
        <button onClick={() => dispatch(decreaseValue())}>Decrement Value</button>
        <button onClick={() => dispatch(resetValue())}>Reset Value</button>
        

        <br />
        <input type='number' value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={handleCounter}>Increment Counter</button>

    </div>
  )
}

export default Counter