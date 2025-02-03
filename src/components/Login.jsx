import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import data from '../data/data.json';
import '../assets/App.css';
import ReCAPTCHA from "react-google-recaptcha"; 

const Login = () => {
  const navigate = useNavigate();
  
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [emailWarning, setEmailWarning] = useState('');
  const [loginError, setLoginError] = useState('');
  const [attemptCount, setAttemptCount] = useState(0);
  const [captchaValue, setCaptchaValue] = useState(null);
  const maxAttempts = 3;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleInputChange = (e) => {
    const value = e.target.value;
    setEmailOrUsername(value);

    if (value && !emailRegex.test(value) && value !== '') {
      setEmailWarning('');
    } else if (value && emailRegex.test(value)) {
      setEmailWarning('');
    } else {
      setEmailWarning('');
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value); 
  };

  const handleLogin = (e) => {
    e.preventDefault();
  
    if (attemptCount >= maxAttempts) {
      setLoginError('Maximum limit of invalid password attempts has been reached. Please try again later.');
      return;
    }
  
    if (!emailOrUsername) {
      setLoginError('Please enter a username or email.');
      return;
    }
  
    if (!captchaValue) {
      setLoginError('Please complete the CAPTCHA.');
      return;
    }
  
    const user = data.users.find(
      (u) =>
        (emailRegex.test(emailOrUsername) && u.email === emailOrUsername) || 
        (!emailRegex.test(emailOrUsername) && u.username === emailOrUsername) 
    );
  
    if (user && user.password === password) {
      setAttemptCount(0);
      setLoginError(''); 
      navigate('/dtr'); 
    } else {
      const newAttempt = attemptCount + 1;
      setAttemptCount(newAttempt);
      if (newAttempt >= maxAttempts) {
        setLoginError('Maximum limit of invalid password attempts has been reached. Please try again later.');
      } else {
        setLoginError('Email/Username or password is incorrect.');
      }
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-heading">Exam track</h1>

      <div className="login-card">
        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <label className="input-label">Name</label>
            <input
              type="text"
              name="emailOrUsername"
              placeholder="Username or Email"
              value={emailOrUsername}
              onChange={handleInputChange}
              required
              className="input-field"
            />
            {emailWarning && <span className="warning-text">{emailWarning}</span>}
          </div>

          <div className="input-group">
            <label className="input-label">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
              className="input-field"
            />
          </div>

          <div className="recaptcha-container">
            <ReCAPTCHA
              sitekey="6LcRIMsqAAAAAN2SXUPpCy8mlUB9WKPQkqZQ9Wb5" 
              onChange={handleCaptchaChange}
            />
          </div>

          <button
            type="submit"
            disabled={
              password.length < 4 || 
              attemptCount >= maxAttempts || 
              !captchaValue 
            }
            className="login-button"
          >
            Login
          </button>
        </form>

        {loginError && <div className="warning-text error-text">{loginError}</div>}

        <Link to="/forgot-password" className="forgot-password-link">
          Forgot Password?
        </Link>
      </div>

      <p className="footer-text">Copyright © 2024 HRIS, All Rights Reserved.</p>
    </div>
  );
};

export default Login;
