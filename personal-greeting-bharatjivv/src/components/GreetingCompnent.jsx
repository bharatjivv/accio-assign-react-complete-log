import React, { useState } from "react";

const GreetingComponent = () => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const trimmedName = name.trim();

  return (
    <div className="greeting-container">
      <h1>Enter your Name:</h1>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        className="name-input"
        id="name-input" // <-- Important for Cypress selectors
      />
      {trimmedName !== "" && <p id="greeting-message">Hello {trimmedName}!</p>}
    </div>
  );
};

export default GreetingComponent;
