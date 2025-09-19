import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';

function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(logout());
    navigate('/');
  };

  useEffect(() => {
    if (!user?.token) {
      navigate('/');
    }
  }, []);

  return (
    <div>
      <h2>Profile Page</h2>
      <p><strong>Name:</strong> {user?.name}</p>
      <p><strong>Email:</strong> {user?.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Profile;
