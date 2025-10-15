import React from 'react';
import './Header.css'; // We'll create this for styling
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src="/assets/logo.png" alt="Logo" className="logo" />
      </div>
      <div className="header-center">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            className="search-bar"
          />
          <SearchOutlinedIcon className="search-icon" />
        </div>
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
