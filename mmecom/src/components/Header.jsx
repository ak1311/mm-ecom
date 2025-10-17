import React, { useState } from 'react';
import './Header.css'; // We'll create this for styling
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
// import EcoOutlinedIcon from '@mui/icons-material/EcoOutlined';
import EmojiFoodBeverageOutlinedIcon from '@mui/icons-material/EmojiFoodBeverageOutlined';
import SetMealOutlinedIcon from '@mui/icons-material/SetMealOutlined';
import BreakfastDiningOutlinedIcon from '@mui/icons-material/BreakfastDiningOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import MenuItem from '@mui/material/MenuItem';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [categoryMenuAnchorEl, setCategoryMenuAnchorEl] = useState(null);
  const categoryMenuOpen = Boolean(categoryMenuAnchorEl);

  const handleCategoryMenuClick = (event) => {
    setCategoryMenuAnchorEl(event.currentTarget);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCategoryMenuClose = () => {
    setCategoryMenuAnchorEl(null);
  };

  return (
    <>
      <header className="header">
        <div className="header-left">
          <MenuIcon className="hamburger-menu" />
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
          <div className="icon-placeholder">
            <FavoriteBorderOutlinedIcon />
          </div>
          <div className="separator"></div>
          <div className="icon-placeholder">
            <ShoppingCartOutlinedIcon />
          </div>
          <div className="separator"></div>
          <div className="icon-placeholder" onClick={handleClick}>
            <PersonOutlineOutlinedIcon />
          </div>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>Login</MenuItem>
            <MenuItem onClick={handleClose}>Register</MenuItem>
          </Menu>
        </div>
      </header>
      <div className="sub-header">
        <div className="sub-header-left">
          <button className="category-button" onClick={handleCategoryMenuClick}>
            <MenuIcon className="sub-menu-icon" />
            <span>All Categories</span>
          </button>
          <Menu
            anchorEl={categoryMenuAnchorEl}
            open={categoryMenuOpen}
            onClose={handleCategoryMenuClose}
            MenuListProps={{
              'aria-labelledby': 'category-button',
            }}
          >
            <MenuItem onClick={handleCategoryMenuClose} className="category-menu-item">
              {/* <EcoOutlinedIcon fontSize="small" />  */}Vegetables & Fruit
            </MenuItem>
            <MenuItem onClick={handleCategoryMenuClose} className="category-menu-item">
              <EmojiFoodBeverageOutlinedIcon fontSize="small" /> Beverages
            </MenuItem>
            <MenuItem onClick={handleCategoryMenuClose} className="category-menu-item">
              <SetMealOutlinedIcon fontSize="small" /> Meats & Seafood
            </MenuItem>
            <MenuItem onClick={handleCategoryMenuClose} className="category-menu-item">
              <BreakfastDiningOutlinedIcon fontSize="small" /> Breakfast & Dairy
            </MenuItem>
            <MenuItem onClick={handleCategoryMenuClose} className="category-menu-item">
              <AcUnitOutlinedIcon fontSize="small" /> Frozen Foods
            </MenuItem>
          </Menu>
        </div>
        <div className="sub-header-center">
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/product">Product</a>
          <a href="/pages">Pages</a>
        </div>
        <div className="sub-header-right">
          <button className="deals-button">
            <LocalOfferOutlinedIcon fontSize="small" />
            <span>DEALS</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
