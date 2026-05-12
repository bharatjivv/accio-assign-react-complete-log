import React from "react";

function Counter() {
  const [value, setValue] = React.useState(0);
  const [stored, setStored] = React.useState([]);

  const updateHistory = (value) => {
    setStored((prev) => {
      const updatedArr = [...prev, value];
      console.log(updatedArr);
      return updatedArr;
    });
  };

  return (
    <>
      <p>{value}</p>
      <div>
        <button
          onClick={() => {
            setValue((val) => val + 1);
            updateHistory(value);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setValue((val) => val - 1);
            updateHistory(value);
          }}
        >
          -
        </button>
      </div>
      <div>
        <button onClick={handleUndo}>Undo</button>
        <button onClick={handleRedo}>Redo</button>
      </div>
    </>
  );
}

export default Counter;

