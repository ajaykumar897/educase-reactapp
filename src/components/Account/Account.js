// src/components/Account/Account.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Account.css';

function Account() {
  const location = useLocation();
  const navigate = useNavigate();
  const userData = location.state;

  // If no state is passed, redirect to welcome page
  if (!userData) {
    navigate('/');
    return null;
  }

  const { fullName, phone, email, isAgency } = userData;
  const firstLetter = fullName?.charAt(0)?.toUpperCase() || 'U';

  return (
    <div className="account-container">
      <div className="account-card">
        <div className="account-avatar">{firstLetter}</div>
        <div className="account-main-info">
          <h2>{fullName}</h2>
          <p className="account-email">{email}</p>
        </div>

        <h3 className="account-settings-heading">Account Settings</h3>
        <p><strong>Full Name:</strong> {fullName}</p>
        <p><strong>Phone:</strong> +91 {phone}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Are you an agency?:</strong> {isAgency}</p>
      </div>
    </div>
  );
}

export default Account;
