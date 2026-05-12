import React, { useState } from "react";
import products from "../../products.json";

function Filtering() {
  const [text, setText] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(text.toLowerCase()),
  );

  return (
    <div>
      <span>Filtering - </span>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Filtering;
