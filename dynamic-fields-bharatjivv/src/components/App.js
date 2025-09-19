import React, { useState } from "react";

function App() {
  const [fields, setFields] = useState([{ name: "", age: "" }]);

  // Add a new field set
  const addField = () => {
    setFields([...fields, { name: "", age: "" }]);
  };

  // Remove a specific field set
  const removeField = (index) => {
    const updatedFields = fields.filter((_, i) => i !== index);
    setFields(updatedFields);
  };

  // Handle input change for name or age
  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedFields = [...fields];
    updatedFields[index][name] = value;
    setFields(updatedFields);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fields);
  };

  return (
    <div>
      <h2>Dynamic Fields Form</h2>
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={index}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={field.name}
              onChange={(e) => handleChange(index, e)}
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={field.age}
              onChange={(e) => handleChange(index, e)}
            />
            {fields.length > 1 && (
              <button type="button" onClick={() => removeField(index)}>
                Remove
              </button>
            )}
          </div>
        ))}

        <button type="button" onClick={addField}>
          Add More..
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
