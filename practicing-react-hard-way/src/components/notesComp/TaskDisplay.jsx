import React from "react";

function TaskDisplay({ allNotes, setAllNotes }) {
  console.log('component taskdisplay')

  const handleDelete = (id) => {
    console.log(id);
    setAllNotes(allNotes.filter((_, index) => index !== id));
  };

  return (
    <>
      {
        <ul>
          {allNotes.map((val, id) => {
            return (
                <li key={id}>
                  {val} <button onClick={() => handleDelete(id)}>Delete</button>
                </li>
            );
          })}
        </ul>
      }
    </>
  );
}

export default React.memo(TaskDisplay);
// export default TaskDisplay;
