import React from 'react';
import './Header.css'; // We'll create this for styling

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">Logo</div>
      </div>
      <div className="header-center">
        <input
          type="text"
          placeholder="Search..."
          className="search-bar"
        />
      </div>
      <div className="header-right">
        <div className="icon-placeholder">Heart</div>
        <div className="icon-placeholder">Cart</div>
        <div className="icon-placeholder">Profile</div>
      </div>
    </header>
  );
};

export default Header;
