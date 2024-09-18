import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/HomePage.css"; 
import Navbar from '../components/Navbar'; // Assuming you have a Navbar component

const HomePage = () => {
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const fullText = "Manage your inventory efficiently!"; 
  const navigate = useNavigate();

  useEffect(() => {
    if (textIndex < fullText.length) {
      const timeoutId = setTimeout(() => {
        setCurrentText(currentText + fullText.charAt(textIndex));
        setTextIndex(textIndex + 1);
      }, 100); // Adjust typing speed here (100ms per character)
      return () => clearTimeout(timeoutId);
    }
  }, [textIndex, currentText, fullText]);

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.username) errors.username = 'Username is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.password) errors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      // Handle form submission, e.g., an API call
      console.log('Registration successful:', formData);
      navigate('/welcome'); // Redirect to another page on successful registration
    }
  };

  return (
    <div className="home-page">
      {/* Navbar */}
      <Navbar />
      <div className="home-container">
        <div className="image-container">
          {/* Add your image here */}
          <img src={require('../assets/inventory-1.png')} alt="Inventory Management" className="home-image" />
        </div>
        <div className="text-and-form-container">
          <div className="overview-text">
            <p>{currentText}</p>
          </div>
          <div className="register-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit} className="register-form">
              <div className="form-group">
                <label>Username:</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
                {formErrors.username && <span className="error">{formErrors.username}</span>}
              </div>
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
              <div className="form-group">
                <label>Confirm Password:</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                {formErrors.confirmPassword && <span className="error">{formErrors.confirmPassword}</span>}
              </div>
              <button type="submit" className="submit-btn">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
