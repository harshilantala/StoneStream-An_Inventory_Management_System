import React from 'react';
import '../styles/Navbar.css'; // Create a separate CSS file for Navbar styles

const Navbar = () => {
  return (
    <nav>
      <div className="menu">
        <div className="logo">
          <a href="/">StoneStream</a>
        </div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Inventory</a></li>
          <li><a href="/">Sales</a></li>
          <li><a href="/">Purchases</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
