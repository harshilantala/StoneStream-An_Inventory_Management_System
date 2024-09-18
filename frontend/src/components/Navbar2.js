import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaWarehouse, FaShoppingCart, FaDollarSign, FaChartLine, FaHistory, FaFileInvoice, FaSignOutAlt, FaUserCircle } from 'react-icons/fa';
import '../styles/Navbar2.css'; // Make sure your CSS has space for the profile section

const Navbar2 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className={`navbar2 ${isOpen ? 'open' : ''}`}>
                <div className="brand-logo">StoneStream</div>
                <div className="menu-icon" onClick={toggleMenu}>
                    &#9776; {/* Menu icon */}
                </div>
                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <li><Link to="/inventory"><FaWarehouse /> Inventory</Link></li>
                    <li><Link to="/purchase"><FaShoppingCart /> Purchase</Link></li>
                    <li><Link to="/sale"><FaDollarSign /> Sale</Link></li>
                    <li><Link to="/dashboard"><FaChartLine /> Dashboard</Link></li>
                    <li><Link to="/order-history"><FaHistory /> Order History</Link></li>
                    <li><Link to="/invoice"><FaFileInvoice /> Invoice</Link></li>
                    <li><Link to="/"><FaSignOutAlt /> Logout</Link></li>
                </ul>
            <div className="profile-section">
                <FaUserCircle className="profile-icon" />
                <div className="profile-details">
                    <h4>John Doe</h4> {/* Username */}
                    <Link to="/profile-setting">Profile Settings</Link> {/* Link to profile settings */}
                </div>
            </div>
            </nav>
        </>
    );
};

export default Navbar2;
