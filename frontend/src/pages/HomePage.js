import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HomePage.css';
import background from '../assets/background.jpg';
import Navbar from '../components/Navbar';  // Import the new Navbar component

const HomePage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div>
      <Navbar /> 
      <div className="img" style={{ backgroundImage: `url(${background})` }}></div>
      <div className="center">
        <div className="title">Welcome to StoneStream</div>
        <div className="sub_title">Manage Inventory Efficiently</div>
        <div className="btns">
          <button onClick={handleRegisterClick}>Register</button>
          <button onClick={handleLoginClick}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
