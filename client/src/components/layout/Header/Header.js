import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <div className="header-wrapper">
      <div className="header-logo">
          <img src="/icons/bear.png" />
        </div>
      <div className="search-bar">
          <i className="fas fa-search" />
          <input />
        </div>
      <div className="links">
          <div>
              <Link to="/login">Login</Link>
            </div>
          <div>
              <Link to="/signup">Signup</Link>
            </div>
        </div>
    </div>
);

export default Header;
