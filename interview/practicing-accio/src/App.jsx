// import React from "react";
// import NewTodo from "./components/Todo/NewTodo";
// import Counter from './components/Counter/Counter';

// function App() {
//   return (
//     <>
//       {/* <NewTodo /> */}
//       <Counter />
//     </>
//   );
// }

// export default App;

// import React, { useState } from 'react';

// const dummyUser = {
//   email: "test@example.com",
//   password: "password123",
// };

// function App() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [userError, setUserError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Clear previous errors
//     setUserError("");
//     setPasswordError("");
//     setLoading(true);

//     // Simulate async API call (3000ms)
//     setTimeout(() => {
//       if (email !== dummyUser.email) {
//         setUserError("User not found");
//       } else if (password !== dummyUser.password) {
//         setPasswordError("Password Incorrect");
//       } else {
//         // Successful login
//         setUserError("");
//         setPasswordError("");
//         alert("Login Successful!");
//       }
//       setLoading(false);
//     }, 3000);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//     setUserError("");
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//     setPasswordError("");
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           id="input-email"
//           value={email}
//           onChange={handleEmailChange}
//         />

//         <input
//           type="password"
//           id="input-password"
//           value={password}
//           onChange={handlePasswordChange}
//         />

//         <button type="submit" id="submit-form-btn" disabled={loading}>
//           {loading ? "Logging in..." : "Submit"}
//         </button>
//       </form>
//       {userError && <p id="user-error">{userError}</p>}
//       {passwordError && <p id="password-error">{passwordError}</p>}
//     </>
//   );
// }

// export default App;

// import React, { useState } from "react";

// function App() {
//   const [task, setTask] = useState("");
//   const [tasks, setTasks] = useState([]);
//   const [editId, setEditId] = useState(null);
//   const [editText, setEditText] = useState("");

//   const addTask = () => {
//     if (task.trim() === "") return;

//     setTasks([...tasks, { id: Date.now(), text: task }]);
//     setTask("");
//   };

//   const deleteTask = (id) => {
//     setTasks(tasks.filter((t) => t.id !== id));
//   };

//   const startEdit = (id, text) => {
//     setEditId(id);
//     setEditText(text);
//   };

//   const saveTask = (id) => {
//     setTasks(
//       tasks.map((t) =>
//         t.id === id ? { ...t, text: editText } : t
//       )
//     );
//     setEditId(null);
//     setEditText("");
//   };

//   return (
//     <div>
//       {/* Add Task Section */}
//       <div className="add_tasks_section">
//         <textarea
//           type="text"
//           value={task}
//           onChange={(e) => setTask(e.target.value)}
//           placeholder="Add a task"
//         ></textarea>
//         <button onClick={addTask}>Add</button>
//       </div>

//       {/* Tasks Section */}
//       <div className="tasks_section">
//         {tasks.map((t) => (
//           <div className="task" key={t.id}>
//             {editId === t.id ? (
//               <>
//                 <input
//                   type="text"
//                   value={editText}
//                   onChange={(e) => setEditText(e.target.value)}
//                 />
//                 <button
//                   className="save"
//                   onClick={() => saveTask(t.id)}
//                 >
//                   Save
//                 </button>
//               </>
//             ) : (
//               <>
//                 <span>{t.text}</span>
//                 <button
//                   className="edit"
//                   onClick={() => startEdit(t.id, t.text)}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className="delete"
//                   onClick={() => deleteTask(t.id)}
//                 >
//                   Delete
//                 </button>
//               </>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";
// // import './../styles/App.css';

// const App = () => {
//   const [value, setValue] = useState(0);
//   return (
//     <div>
//       {/* Do not remove the main div */}
//       <h1>Enter your budget to check available items:</h1>
//       <input
//         type="number"
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//       />

//       <table>
//         <thead>
//           <tr>
//             <th>Item</th>
//             <th>Price</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>Apple</td>
//             <td style={{ color: value >= 20 ? "green" : "red" }}>20</td>
//           </tr>
//           <tr>
//             <td>Banana</td>
//             <td style={{ color: value >= 10 ? "green" : "red" }}>10</td>
//           </tr>
//           <tr>
//             <td>Neutella</td>
//             <td style={{ color: value >= 30 ? "green" : "red" }}>30</td>
//           </tr>
//           <tr>
//             <td>Razor</td>
//             <td style={{ color: value >= 5 ? "green" : "red" }}>5</td>
//           </tr>
//           <tr>
//             <td>CornFlakes</td>
//             <td style={{ color: value >= 15 ? "green" : "red" }}>15</td>
//           </tr>
//           <tr>
//             <td>SoundBar</td>
//             <td style={{ color: value >= 50 ? "green" : "red" }}>50</td>
//           </tr>
//           <tr>
//             <td>Iphone</td>
//             <td style={{ color: value >= 80 ? "green" : "red" }}>80</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from "react";

// const App = () => {
//   const [digits, setDigits] = useState("");

//   // Format digits into (123) 456-7890
//   const formatPhoneNumber = (value) => {
//     const numbers = value.slice(0, 10);

//     if (numbers.length === 0) return "";

//     if (numbers.length < 4) {
//       return `(${numbers}`;
//     }

//     if (numbers.length < 7) {
//       return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
//     }

//     return `(${numbers.slice(0, 3)}) ${numbers.slice(
//       3,
//       6
//     )}-${numbers.slice(6)}`;
//   };

//   const handleChange = (e) => {
//     const onlyNumbers = e.target.value.replace(/\D/g, "");
//     setDigits(onlyNumbers.slice(0, 10));
//   };

//   const handleSubmit = () => {
//     setDigits("");
//   };

//   const isComplete = digits.length === 10;

//   return (
//     <div>
//       <button disabled={!isComplete} onClick={handleSubmit}>
//         Submit
//       </button>

//       <input
//         type="text"
//         value={formatPhoneNumber(digits)}
//         onChange={handleChange}
//         placeholder="(555) 555-5555"
//       />
//     </div>
//   );
// };

// export default App;

// import React from "react";

// function App() {
//   const [search, setSearch] = React.useState("");
//   const [movieList, setList] = React.useState([]);
//   // console.log(search)
//   const [error, setError] = React.useState("");
//   const [loading, setLoading] = React.useState(false);

//   const API_KEY = "99eb9fd1";
//   const URL = "https://www.omdbapi.com/";

//   const handleSearch = async () => {
//     if (!search.trim()) return;
//     setLoading(true)

//     try {
//       const res = await fetch(`${URL}?apikey=${API_KEY}&s=${search}`);
//       const data = await res.json();
//       console.log(data)

//       if (data.Response === "False") {
//         setError("Invalid movie name. Please try again.");
//         setList([]);
//         setLoading(false);
//       } else {
//         setError("");
//         setList(data.Search);
//         setLoading(false);
//       }
//     } catch (err) {
//       console.log("error occurred", err);
//       setError("Invalid movie name. Please try again.");
//       setList([]);
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <input type="text" onChange={(e) => setSearch(e.target.value)} />
//       <button onClick={handleSearch}>Search</button>

//       <div>
//         {loading=== true ? <p>Loading...</p> : <ul>
//           {error.length !== 0 && <p>No movies found. Cannot fetch data </p>}
//           {movieList.length !== 0 && movieList.map((movie) => (
//             <li key={movie.imdbID}>
//               <p>{movie.Title}</p>
//                {movie.Poster !== "N/A" && (
//           <img src={movie.Poster} alt={movie.Title} />
//         )}
//             </li>
//           ))}
//         </ul>}

//       </div>
//     </>
//   );
// }

// export default App;

// import React from "react";

// function App() {
//   const [city, setCity] = React.useState("");
//   const [info, setInfo] = React.useState();
//   const [loading, setLoading] = React.useState(false);

//   const API_KEY = "b6a9bc4abec1f1a9b55adb749f378d26";
//   const URL = "https://api.openweathermap.org/data/2.5/weather";

//   const getData = async () => {
//     setLoading(true);
//     try {
//       const res = await fetch(`${URL}?q=${city}&appid=${API_KEY}`);
//       const data = await res.json();
//       console.log(data);
//       setInfo(data);
//       setLoading(false);
//     } catch (err) {
//       console.log("couldnot fetch");
//       setLoading(false);
//     }

//     // console.log(info)
//   };

//   const handleSearch = () => {
//     if (city.trim() === "") return;
//     getData();
//   };

//   return (
//     <>
//       <input
//         type="text"
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//         className='search'
//       />
//       <button onClick={handleSearch}>Search</button>
//       {/* <p>{info}</p> */}

//       {loading === true ? (
//         <p>Loading... </p>
//       ) : (
//         <div>
//           {info && (
//             <div>
//               <h3 className="weather">{info.name}</h3>
//               <p>
//                 Coordinates - Lat{" "}
//                 <span style={{ color: "red", fontWeight: "bold" }}>
//                   {" "}
//                   {info.coord.lat}{" "}
//                 </span>
//                 , Lon -{" "}
//                 <span style={{ color: "red", fontWeight: "bold" }}>
//                   {info.coord.lon}
//                 </span>
//               </p>
//               <span>Weather -{info.weather[0].main}</span>
//               <span >
//                 <img
//                   src={`https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`}
//                   style={{ width: "75px", height: "75px" }}
//                 />
//               </span>
//             </div>
//           )}
//         </div>
//       )}
//     </>
//   );
// }

// export default App;

// import React from 'react';

// const data = [
//     {
//         id: 1,
//         name: "ABC",
//         email: "abc@gmail.com",
//         password: "12"
//     },
//     {
//         id: 2,
//         name: "DEF",
//         email: "def@gmail.com",
//         password: "1234"
//     },
//     {
//         id: 3,
//         name: "GHI",
//         email: "ghi@gmail.com",
//         password: "123456"
//     }
// ]

// function App() {
//   const [email, setEmail] = React.useState('')
//   const [password, setPassword] = React.useState('');
//   const [error, setError] = React.useState('')

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setEmail('')
//     setPassword('')
//     setError('')

//     setTimeout(() => {
//       const selectedData = data.filter((details) => details.email === email && details.password === password)

//       if(selectedData.length !== 0){
//         console.log(selectedData[0]);
//       } else {
//         setError('Email or password is not correct')
//       }
//     }, 3000)
//   }

//   return (
//     <>
//     <form onSubmit={handleSubmit}>
//       <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
//       <br />
//       <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//       <p>{error}</p>
//     </>
//   )
// }

// export default App;

// import React, { useState, useEffect } from "react";

// function App() {
//   const [data, setData] = useState({});
//   const [loading, setLoading] = useState(false);

//   const getData = async () => {
//     setLoading(true);
//     try {
//       const data = await fetch("https://dummyjson.com/products");
//       const res = await data.json();
//       setData(() => {
//         const dataji = res;
//         console.log(dataji);
//         return dataji;
//       });
//       setLoading(false);
//     } catch (error) {
//       console.log("counldnt fetch data", error.message);
//       setLoading(false);
//     }
//   };

//   // console.log("data products", data.products);
//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <>
//       {loading && <p>Loading...</p>}

//       <pre>{
//         data
//         }</pre>
//     </>
//   );
// }

// export default App;



import Tabs from './components/Tabs';

function App() {
  const tabsData = [
    {
      title: "Home",
      content: <p>Welcome to Home tab</p>,
    },
    {
      title: "Profile",
      content: <p>This is your profile</p>,
    },
    {
      title: "Settings",
      content: <p>Change your settings here</p>,
    },
  ];

  return <Tabs tabs={tabsData} />;
}

export default App;


