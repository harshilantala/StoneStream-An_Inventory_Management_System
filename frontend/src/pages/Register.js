import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css"; // Import the CSS file for styling
import Navbar from "../components/Navbar";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Handle registration logic here
    navigate("/dashboard"); // Redirect to dashboard after registration (replace with your route)
  };

  return (
    <div>
      <Navbar />
      <div className="register-container">
        <form className="register-form" onSubmit={handleRegister}>
          <h2>Register for StoneStream</h2>
          <div className="input-group">
            <div className="input-field">
              <label>Name</label>
              <input type="text" required placeholder="Enter your name" />
            </div>
            <div className="input-field">
              <label>Shop Name</label>
              <input type="text" required placeholder="Enter your shop name" />
            </div>
          </div>
          <div className="input-group">
            <div className="input-field">
              <label>Address</label>
              <input type="text" required placeholder="Enter your address" />
            </div>
            <div className="input-field">
              <label>Mobile</label>
              <input
                type="tel"
                required
                placeholder="Enter your mobile number"
              />
            </div>
          </div>
          <div className="input-group">
            <div className="input-field">
              <label>Email</label>
              <input type="email" required placeholder="Enter your email" />
            </div>
            <div className="input-field">
              <label>Password</label>
              <input
                type="password"
                required
                placeholder="Enter your password"
              />
            </div>
          </div>
          <div className="input-field">
            <label>Photo</label>
            <input type="file" required />
          </div>
          <button type="submit">Register</button>
          <div className="login-prompt">
            <p>Already have an account ? <a href="/login">Log in</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
