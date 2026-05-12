import React, { useState } from "react";

function Tags() {
  const [val, setVal] = useState("");
  const [tags, setTags] = useState([]);

  const singleTab = {
    border: "1px solid black",
    backgroundColor: "lightgrey",
    borderRadius: "2px",
    padding: "2px",
    margin: "10px",
  };

  const handleSubmit = () => {
    if (val.trim() === "") return;
    if(tags.includes(val.trim())) return;

    setTags((prev) => [...prev, val]);
    setVal("");
  };

  const handleDelete = (i) => {
    setTags((arr) => arr.filter((val, index) => index !== i))
    
  }

  return (
    <>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} style={{margin: '10px'}}/>
      <button onClick={handleSubmit}>Add</button>
      <div>
        {tags.map((tag, i) => (
          <span key={i} style={{padding:"10px"}}>
            <span  style={singleTab}>
              {tag}{" "}
            </span>
            <button onClick={() => handleDelete(i)}>x</button>
          </span>
        ))}
      </div>
    </>
  );
}

export default Tags;
