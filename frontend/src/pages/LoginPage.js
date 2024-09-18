import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/LoginPage.css"; // Import the CSS for the login page
import Navbar from '../components/Navbar'; // Assuming you have a Navbar component

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.password) errors.password = 'Password is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      // Handle login logic, e.g., API call
      console.log('Login successful:', formData);
      navigate('/dashboard'); // Redirect to the dashboard or home after successful login
    }
  };

  return (
    <div className="login-page">
      {/* Navbar */}
      <Navbar />
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {formErrors.email && <span className="error">{formErrors.email}</span>}
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {formErrors.password && <span className="error">{formErrors.password}</span>}
          </div>
          <button type="submit" className="submit-btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
