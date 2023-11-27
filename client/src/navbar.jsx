import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    const username = localStorage.getItem('name');
    const navigate = useNavigate();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleButtonClick = () => {
        navigate('/team');
    };

    const handleLogout = () => {
        navigate('/login');
    };

    const handleDropdownToggle = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleMenuItemClick = (menuItem) => {
        // Handle menu item click based on menuItem
        // For example, you can navigate to different pages for each menu item
        console.log(`Clicked on ${menuItem}`);
    };

    return (
        <div className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container d-flex justify-content-between align-items-center">
                <a className="navbar-brand" href="/home">
                    XYZ company
                </a>

                <div className="d-flex justify-content-center">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/about" onClick={() => handleMenuItemClick('About')}>
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/services" onClick={() => handleMenuItemClick('Services')}>
                                Services
                            </a>
                        </li>
                        <li className="nav-item">
                            
                            <div
  className={`nav-link dropdown-toggle ${dropdownOpen ? 'show' : ''}`}
  onClick={handleDropdownToggle}
>
  Branches
  <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
    <a className="dropdown-item" onClick={() => handleMenuItemClick('Branch 1')}>
      Jayanagar
    </a>
    <a className="dropdown-item" onClick={() => handleMenuItemClick('Branch 2')}>
      JP nagar
    </a>
    <a className="dropdown-item" onClick={() => handleMenuItemClick('Branch 2')}>
      Koramangala
    </a>
    <a className="dropdown-item" onClick={() => handleMenuItemClick('Branch 2')}>
      White field
    </a>
  </div>
</div>
        
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/team" onClick={handleButtonClick}>
                                Our Team
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="ml-auto">
                    <div className={`dropdown ${dropdownOpen ? 'show' : ''}`}>
                        <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"  
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded={dropdownOpen ? 'true' : 'false'}
                            onClick={handleDropdownToggle}
                        >
                            {username}
                        </button>
                        <div
                            className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}
                            aria-labelledby="dropdownMenuButton"
                        >
                            <a className="dropdown-item" onClick={() => handleMenuItemClick('Username')} style={{ cursor: 'pointer' }}>
                                {username}
                            </a>
                            <a className="dropdown-item" onClick={() => handleMenuItemClick('Contact Us')} style={{ cursor: 'pointer' }}>
                                Contact Us
                            </a>
                            <a className="dropdown-item" onClick={() => handleMenuItemClick('FAQs')} style={{ cursor: 'pointer' }}>
                                FAQs
                            </a>
                            <a className="dropdown-item" onClick={() => handleMenuItemClick('Help')} style={{ cursor: 'pointer' }}>
                                Help
                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" onClick={handleLogout} style={{ cursor: 'pointer' }}>
                                Logout
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Navbar;