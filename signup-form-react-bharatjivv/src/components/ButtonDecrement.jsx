import React, { useState } from "react";

const ButtonDecrement = () => {
  const [count, onCount] = useState(100);

  const handleClick = () => {
    onCount(count - 1);
  };

  console.log("rendered decrement");

  return (
    <div>
      <button onClick={handleClick}>Clicked {count} times</button>
    </div>
  );
};

export default ButtonDecrement;
