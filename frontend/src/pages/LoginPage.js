import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';  // Import the CSS file for styling
import Navbar from '../components/Navbar';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    navigate('/dashboard');  // Redirect to dashboard after login (replace with your route)
  };

  return (
    <div>
      <Navbar />
      <div className="login-container">
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Login to StoneStream</h2>
          <div className="input-field">
            <label>Email</label>
            <input type="email" required placeholder="Enter your email" />
          </div>
          <div className="input-field">
            <label>Password</label>
            <input type="password" required placeholder="Enter your password" />
          </div>
          <button type="submit">Login</button>
          <div className="signup-prompt">
            <p>New to StoneStream? <a href="/register">Join Now</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
