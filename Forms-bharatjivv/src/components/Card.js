import React from "react";

const Card = ({ children }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "1.5rem",
        borderRadius: "8px",
        maxWidth: "500px",
        margin: "2rem auto",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
      }}
    >
      {children}
    </div>
  );
};

export default Card;