import React, { useState } from 'react'

const Counter = () => {

    const [inputVal, setInputVal] = useState(0)
    const [counterVal, setCounterVal] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault()
        setCounterVal(Number(inputVal))
        setInputVal(Number(inputVal))

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="number" value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
                <button type="submit">Set</button>
            </form>


            <p>Counter : {counterVal}</p>

            <button onClick={() => setCounterVal(counterVal+1)}>Increment</button>
            <button onClick={() => setCounterVal(counterVal-1)}>Decrement</button>
            <button onClick={() => setCounterVal(inputVal)}>Reset</button>

        </div>
    )
}

export default Counter