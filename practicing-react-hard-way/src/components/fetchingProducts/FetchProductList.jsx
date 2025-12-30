import React, { useState, useEffect } from "react";

function FetchProductList() {
  const [productList, setProductList] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");

  async function getData() {
    const data = await fetch("https://dummyjson.com/products");
    const res = await data.json();
    setProductList([...res.products]);
  }

  const handleDelete = (index) => {
    setProductList(productList.filter((_, i) => i !== index));
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    const filteredArray = productList.filter((key, value) =>
      key.title.toLowerCase().includes(value.toLowerCase())
    );

    setSearchFilter(value);
  };

  useEffect(function () {
    getData();
  }, []);

  useEffect(() => {
    console.log("Updated productList:", productList);
  }, [productList]);

  return (
    <div>
      <input
        value={searchFilter}
        onChange={(e) => handleSearch(e)}
        placeholder="Search something..."
      />
      <p>{searchFilter}</p>
      <ul>
        {productList.map((li, index) => (
          <li key={index}>
            {index}
            {li.title}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchProductList;
