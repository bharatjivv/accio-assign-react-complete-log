import React, { useState, useEffect } from "react";

const SumTotal = () => {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value !== "" && !isNaN(value)) {
      const parsed = parseInt(value);
      setNumbers((prev) => [...prev, parsed]);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const total = numbers.reduce((acc, curr) => acc + curr, 0);
      setSum(total);
    }, 0);
    return () => clearTimeout(timer);
  }, [numbers]);

  return (
    <div style={{ padding: "1rem", fontFamily: "Arial" }}>
      <input
        type="number"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter number"
      />
      <p>
        <strong>Sum:</strong> {sum}
      </p>
    </div>
  );
};

export default SumTotal;
