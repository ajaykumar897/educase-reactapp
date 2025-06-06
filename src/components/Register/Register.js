
// src/components/Register/Register.js//
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'Yes',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    localStorage.setItem('userData', JSON.stringify(formData));
    navigate('/account', { state: formData }); // navigate to account/profile page
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Create your PopX account</h2>

      <div className="register-form-group">
        <label>Full Name<span>*</span></label>
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
      </div>

      <div className="register-form-group">
        <label>Phone number<span>*</span></label>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
      </div>

      <div className="register-form-group">
        <label>Email address<span>*</span></label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>

      <div className="register-form-group">
        <label>Password<span>*</span></label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </div>

      <div className="register-form-group">
        <label>Company name</label>
        <input type="text" name="company" value={formData.company} onChange={handleChange} />
      </div>

      <div className="register-form-group">
        <label>Are you an Agency?<span>*</span></label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="isAgency"
              value="Yes"
              checked={formData.isAgency === 'Yes'}
              onChange={handleChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="isAgency"
              value="No"
              checked={formData.isAgency === 'No'}
              onChange={handleChange}
            />
            No
          </label>
        </div>
      </div>

      <button className="register-button" onClick={handleSubmit}>
        Create Account
      </button>
    </div>
  );
}

export default Register;
