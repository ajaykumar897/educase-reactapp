// src/components/Welcome/Welcome.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <h2 className="welcome-title">Welcome to PopX</h2>
      <p className="welcome-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      
      <button className="create-account-btn" onClick={() => navigate('/register')}>
        Create Account
      </button>

      <button className="login-btn" onClick={() => navigate('/login')}>
        Already Registered? Login
      </button>
    </div>
  );
}

export default Welcome;

