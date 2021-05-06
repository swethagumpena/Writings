import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const getRole = () => {
    const role = localStorage.getItem('role');
    if (role === 'admin') { return true; }
    return false;
  };

  useEffect(() => {
    setIsAdmin(getRole());
    const token = localStorage.getItem('token');
    setIsSignedIn(!!token);
  });

  return (
    <div>
      <NavBar isAdmin={isAdmin} isSignedIn={isSignedIn} />
    </div>
  );
};

export default App;
