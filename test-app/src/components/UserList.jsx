import React, { useEffect, useState } from "react";

function UserList() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const data = await fetch("http://localhost:3000/allusers");
    const res = await data.json();
    setData(res.users);
    // console.log(res);
  };

  const handleDelete = async (id) => {
    console.log(id)
    const deleteRequest = await fetch(`http://localhost:3000/delete/${id}`, {
      method: 'DELETE',
    })
    const res = await deleteRequest.json()
    alert(res.message)
    getData();
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h3>UserList</h3>
      {
        <ul>
          <p>
            {data.map((val) => {
              return (
                <li key={val._id}>
                  {" "}
                  {val.username} - {val.email} -{" "}
                  <a href={val.link} target="_blank">
                    {" "}
                    {val.link}{" "}
                  </a>{" "}
                  <button onClick={() => handleDelete(val._id)}>
                    Delete
                  </button>
                </li>
              );
            })}
          </p>
        </ul>
      }
    </div>
  );
}

export default UserList;
