import React, { useContext } from 'react';
// import { UserData } from '../context/UserDataContext';
import { AuthContext } from '../context/AuthProvider';

const Home = () => {
  // const user = useContext(UserData);
  const { login } = useContext(AuthContext)

  const handleLogin = () => {
    const userData = {
      name: 'Bharat',
      age: 25
    }
    login(userData);
  }
  
  return (
    <div>
      <h1>Home</h1>
      {/* <p>{user.name} - {user.age}</p> */}
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Home