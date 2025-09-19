import React from "react";
import "./../styles/App.css";
import { useSelector, useDispatch } from "react-redux";
import { setName, setEmail } from "./infoSlice";

const App = () => {
  const userName = useSelector((state) => state.details.name);
  const userEmail = useSelector((state) => state.details.email);
  const dispatch = useDispatch();
  return (
    <div>
      <form>
        <h1>User Information</h1>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            placeholder="name"
            onChange={(e) => dispatch(setName(e.target.value))}
          />
        </div>
        <br />
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            placeholder="name"
            onChange={(e) => dispatch(setEmail(e.target.value))}
          />
        </div>
      </form>
      <p>Current values in store:</p>
      <section className="output">
        <p>Name - {userName}</p>
        <p>Email - {userEmail}</p>
      </section>
    </div>
  );
};

export default App;