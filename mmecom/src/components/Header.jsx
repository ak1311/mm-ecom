import React, { useState } from 'react';
import './Header.css'; // We'll create this for styling
import './HeaderCustomDropdown.css';
import { Link } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import EmojiFoodBeverageOutlinedIcon from '@mui/icons-material/EmojiFoodBeverageOutlined';
import BlurCircularOutlinedIcon from '@mui/icons-material/BlurCircularOutlined';
import SetMealOutlinedIcon from '@mui/icons-material/SetMealOutlined';
import BreakfastDiningOutlinedIcon from '@mui/icons-material/BreakfastDiningOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import GrainOutlinedIcon from '@mui/icons-material/GrainOutlined';
import LocalCafeOutlinedIcon from '@mui/icons-material/LocalCafeOutlined';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import GoToTopButton from './GoToTopButton';
import Badge from '@mui/material/Badge';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);

  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState(null);
  const mobileMenuOpen = Boolean(mobileMenuAnchorEl);

  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [rememberMe, setRememberMe] = useState(false);


  const handleLoginModalOpen = () => setLoginModalOpen(true);
  const handleLoginModalClose = () => setLoginModalOpen(false);
  const handleCategoryMenuClick = () => {
    setShowCategoryMenu((prev) => !prev);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLoginClick = () => {
    handleClose();
    handleLoginModalOpen();
  };

  const handleCategoryMenuClose = () => {
    setShowCategoryMenu(false);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchorEl(null);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  return (
    <>
      <header className="header">
        <div className="header-left">
          <MenuIcon className="hamburger-menu" onClick={handleMobileMenuOpen} />
          <Link to="/">
            <img src="/assets/logo.png" alt="Logo" className="logo" />
          </Link>
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
          
          <div className="icon-placeholder">
            <Badge badgeContent={cartCount} className="cart-badge" showZero>
              <ShoppingCartOutlinedIcon />
            </Badge>
          </div>
          
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
            <MenuItem onClick={handleClose} component={Link} to="/profile">Profile</MenuItem>
            <MenuItem onClick={handleLoginClick}>Login</MenuItem>
            <MenuItem onClick={handleClose}>Register</MenuItem>
          </Menu>
          <Menu
            anchorEl={mobileMenuAnchorEl}
            open={mobileMenuOpen}
            onClose={handleMobileMenuClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <MenuItem onClick={handleMobileMenuClose} component={Link} to="/">Home</MenuItem>
            <MenuItem onClick={handleMobileMenuClose} component={Link} to="/404">Shop</MenuItem>
            <MenuItem onClick={handleMobileMenuClose} component={Link} to="/404">Product</MenuItem>
            <MenuItem onClick={handleMobileMenuClose} component={Link} to="/404">Pages</MenuItem>
            <MenuItem onClick={handleMobileMenuClose} component={Link} to="/404">About Us</MenuItem>
            <Divider /> 
            <MenuItem onClick={handleCategoryMenuClick}>All Categories</MenuItem>
            <Divider />
            <MenuItem onClick={handleMobileMenuClose}>
              <LocalOfferOutlinedIcon fontSize="small" style={{ marginRight: '8px' }} />
              DEALS
            </MenuItem>
          </Menu>
        </div>
      </header>
      <div className="sub-header">
        <div className="sub-header-left">
          <button className="category-button" onClick={handleCategoryMenuClick}>
            <MenuIcon className="sub-menu-icon" />
            <span>All Categories</span>
          </button>
          {showCategoryMenu && (
            <>
              <div className="category-backdrop" onClick={handleCategoryMenuClose} />
              <div className="custom-category-menu">
                <div className="category-item" onClick={handleCategoryMenuClose}>
                  <BlurCircularOutlinedIcon fontSize="small" /> Thekua
                </div>
                <div className="category-divider" />

                <div className="category-item" onClick={handleCategoryMenuClose}>
                  <EmojiFoodBeverageOutlinedIcon fontSize="small" /> Cookies
                </div>
                <div className="category-divider" />

                <div className="category-item" onClick={handleCategoryMenuClose}>
                  <SetMealOutlinedIcon fontSize="small" /> Raw Spices
                </div>
                <div className="category-divider" />

                <div className="category-item" onClick={handleCategoryMenuClose}>
                  <BreakfastDiningOutlinedIcon fontSize="small" /> Gujiya
                </div>
                <div className="category-divider" />

                <div className="category-item" onClick={handleCategoryMenuClose}>
                  <SpaOutlinedIcon fontSize="small" /> Pickle
                </div>
                <div className="category-divider" />

                <div className="category-item" onClick={handleCategoryMenuClose}>
                  <GrainOutlinedIcon fontSize="small" /> Dry Fruits
                </div>
                <div className="category-divider" />

                <div className="category-item" onClick={handleCategoryMenuClose}>
                  <GrainOutlinedIcon fontSize="small" /> Til Sweets
                </div>
                <div className="category-divider" />

                <div className="category-item" onClick={handleCategoryMenuClose}>
                  <LocalCafeOutlinedIcon fontSize="small" /> Masala Tea Bag
                </div>
              </div>
            </>
          )}
        </div>
        <div className="sub-header-center">
          <Link to="/">Home</Link>
          <Link to="/404">Shop</Link>
          <Link to="/404">Product</Link>
          <Link to="/404">Pages</Link>
          <Link to="/404">About Us</Link>
        </div>
        <div className="sub-header-right">
          <button className="deals-button">
            <LocalOfferOutlinedIcon fontSize="small" />
            <span>DEALS</span>
          </button>
        </div>
      </div>
      
      <Modal
        open={loginModalOpen}
        onClose={handleLoginModalClose}
        aria-labelledby="login-modal-title"
        aria-describedby="login-modal-description"
        className="modal-backdrop"
      >
        <Box className="modal-box">
          <IconButton
            aria-label="close"
            onClick={handleLoginModalClose}
            className="modal-close-button"
          >
            <CloseIcon />
          </IconButton>
          <Typography id="login-modal-title" variant="h6" component="h2" className="modal-header">
            LOGIN
          </Typography>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            className="login-textfield"
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            className="login-textfield"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={rememberMe}
                onChange={handleRememberMeChange}
                name="rememberMe"
                sx={{
                  color: 'white', '&.Mui-checked': { color: '#03b6c3' },
                }}
              />
            }
            label="Remember Me"
            className="remember-me-label"
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            className="submit-button"
          >
            Submit
          </Button>
        </Box>
      </Modal>
      <GoToTopButton />
    </>
  );
};

export default Header;