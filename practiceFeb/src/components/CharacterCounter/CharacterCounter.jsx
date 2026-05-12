import React, {useState, useEffect} from 'react';

function CharacterCounter() {
    const [value, setValue] = useState('')
    const [disabledValue, setDisabledValue] = useState(false)

    useEffect(() => {
        if(value.length >= 100) setDisabledValue(true)
        else setDisabledValue(false)
    }, [value])
  return <>
  
  <input type="text" value={value} onChange={(e) => setValue(e.target.value)} disabled={disabledValue}/>
  <p>{value.length}</p>
  <p>Characters Remaining - {100 - value.length}</p>
  </>;
}
export default CharacterCounter;
