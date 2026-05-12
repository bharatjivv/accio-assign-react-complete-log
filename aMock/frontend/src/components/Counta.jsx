import React, { useState } from 'react'

const Counta = () => {
    const [inputVal, setInputVal] = useState(0)
    const [counterVal, setCounterVal] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault()
        setCounterVal(parseInt(inputVal));
        setInputVal(parseInt(inputVal))
        // console.log(counterVal, typeof counterVal)
        // console.log(inputVal, typeof inputVal)
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="number" value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
                <button type="submit">Set</button>
            </form>
            <br />
            <p>Counter : {counterVal}</p>
            <button onClick={() => setCounterVal(counterVal + 1)}>Increment</button>
            <button onClick={() => setCounterVal(counterVal - 1)}>Decrement</button>
            <button onClick={() => setCounterVal(inputVal)}>Reset</button>
        </div>
    )
}

export default Counta