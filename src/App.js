import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome/Welcome.js';
import Register from './components/Register/Register.js';
import Login from './components/Login/Login.js';
import Account from './components/Account/Account.js';

function App() {
  return (
    <Router>
      <Routes>
        {/* Welcome Page */}
        <Route path="/" element={<Welcome />} />

        {/* Register Page */}
        <Route path="/register" element={<Register />} />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Account/Profile Page */}
        <Route path="/account" element={<Account/>} />
      </Routes>
    </Router>
  );
}

export default App;
