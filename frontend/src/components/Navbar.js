import React from 'react';
import { useNavigate, useLocation  } from 'react-router-dom';
import '../styles/Navbar.css'; // Import CSS for styling the Navbar

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleButtonClick = () => {
    if (location.pathname === '/login') {
      navigate('/'); // If on login page, navigate to home
    } else {
      navigate('/login'); // If on other pages, navigate to login
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>StoneStream</h1>
      </div>
      <div className="navbar-links">
        <button onClick={handleButtonClick} className="login-btn">
          {location.pathname === '/login' ? 'Home' : 'Login'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
