import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../data/data.json'; 
import '../app.css'; 

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailWarning, setEmailWarning] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSend = (e) => {
    e.preventDefault();

    if (!emailRegex.test(email)) {
      setEmailWarning('Please enter a valid email address.');
      return;
    } else {
      setEmailWarning('');
    }

    const user = data.users.find((u) => u.email === email);

    if (user) {
      setMessage('Password recovery instructions have been sent to your email.');
    } else {
      setMessage('Email not found.');
    }
  };

  return (
    <div className="forgot-password-container">
      <h1 className="login-heading">Forgot Password</h1>

      <div className="login-card">
        <form onSubmit={handleSend} className="login-form">
          <div className="input-group">
            <label className="input-label">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input-field"
            />
            {emailWarning && <span className="warning-text">{emailWarning}</span>}
          </div>

          <button type="submit" className="login-button">
            Send
          </button>
          <button type="button" onClick={() => navigate('/')} className="back-button">
            Back
          </button>
        </form>

        {message && <div className="message">{message}</div>}
      </div>

      <p className="footer-text">
        Copyright © 2024 HRIS, All Rights Reserved.
      </p>
    </div>
  );
};

export default ForgotPassword;
