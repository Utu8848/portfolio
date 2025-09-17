import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MyLinks from '../MyLinks';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          Portfolio
        </Link>
        
        <button 
          className="mobile-menu-btn"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          ☰
        </button>
        
        <div className={`navbar ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <MyLinks />
        </div>
      </div>
    </header>
  );
};

export default Header;