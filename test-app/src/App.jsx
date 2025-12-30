import React, { useState } from "react";
import Proton from './components/Proton';
import UserList from './components/UserList';
import Home from './components/Home'
import NotFound from './components/NotFound';
import {Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <div>
      <Link to='/'>Home</Link> {'   '}
      <Link to='/createuser'>Create User</Link> {'  '}
      <Link to='/allusers'>All Users</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createuser" element={<Proton />} />
        <Route path="/allusers" element={<UserList />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
