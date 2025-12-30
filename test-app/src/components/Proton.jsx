import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Proton() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [link, setLink] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/createuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          email,
          link
        })
      });

      const data = await response.json();
      console.log(data);

      setUsername('');
      setEmail('');
      setLink('');

      alert('User created successfully!');
      navigate('/allusers')
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to create user');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />

        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />

        <input
          type="text"
          id="link"
          placeholder="Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
        />
        <br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Proton;
