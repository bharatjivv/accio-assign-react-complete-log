import React from 'react';
import { AuthProvider } from './AuthContext';
import Auth from './Auth';

const App = () => {
  return (
    <AuthProvider>
      <Auth />
    </AuthProvider>
  );
};

export default App;