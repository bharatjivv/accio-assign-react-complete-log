import React, { useState } from "react";

function Button() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  console.log("rendered increment");

  return <button onClick={handleClick}>Clicked {count} times</button>;
}

export default Button;
