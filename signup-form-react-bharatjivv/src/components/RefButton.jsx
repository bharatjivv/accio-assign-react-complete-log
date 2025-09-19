import React, { useRef } from 'react'

const RefButton = () => {
    let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    console.log('You clicked ' + ref.current + ' times!');
  }

  console.log('rendered useref')
  return (
    <div>
      <button onClick={handleClick}>
      Click me!
    </button>
    </div>
  )
}

export default RefButton

