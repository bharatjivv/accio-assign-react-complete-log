import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const Auth = () => {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          onChange={toggleAuth}
          checked={isAuthenticated}
        />
        {' '}I am not a robot
      </label>

      {!isAuthenticated ? (
        <p>you are not authenticated</p>
      ) : (
        <p className="authText">You are now authenticated, you can proceed</p>
      )}
    </div>
  );
};

export default Auth;