import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar2.css';

const Navbar2 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`navbar2 ${isOpen ? 'open' : ''}`}>
            <div className="brand-logo">StoneStream</div>
            <div className="menu-icon" onClick={toggleMenu}>
                &#9776; {/* Menu icon */}
            </div>
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><Link to="/inventory">Inventory</Link></li>
                <li><Link to="/purchase">Purchase</Link></li>
                <li><Link to="/sale">Sale</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/order-history">Order History</Link></li>
                <li><Link to="/invoice">Invoice</Link></li>
                <li><Link to="/">Logout</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar2;
