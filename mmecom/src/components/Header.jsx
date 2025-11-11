import React, { useState } from 'react';
import './Header.css'; // We'll create this for styling
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
import Fade from '@mui/material/Fade';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [categoryMenuAnchorEl, setCategoryMenuAnchorEl] = useState(null);
  const categoryMenuOpen = Boolean(categoryMenuAnchorEl);

  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState(null);
  const mobileMenuOpen = Boolean(mobileMenuAnchorEl);

  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const handleLoginModalOpen = () => setLoginModalOpen(true);
  const handleLoginModalClose = () => setLoginModalOpen(false);
  const handleCategoryMenuClick = (event) => {
    setCategoryMenuAnchorEl(event.currentTarget);
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
    setCategoryMenuAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchorEl(null);
  };

  return (
    <>
      <header className="header">
        <div className="header-left">
          <MenuIcon className="hamburger-menu" onClick={handleMobileMenuOpen} />
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
            <Badge badgeContent={cartCount} className="cart-badge" showZero>
              <ShoppingCartOutlinedIcon />
            </Badge>
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
            <MenuItem onClick={handleMobileMenuClose} component="a" href="/">Home</MenuItem>
            <MenuItem onClick={handleMobileMenuClose} component="a" href="/shop">Shop</MenuItem>
            <MenuItem onClick={handleMobileMenuClose} component="a" href="/product">Product</MenuItem>
            <MenuItem onClick={handleMobileMenuClose} component="a" href="/pages">Pages</MenuItem>
            <MenuItem onClick={handleMobileMenuClose} component="a" href="/pages">About Us</MenuItem>
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
          <Menu
            anchorEl={categoryMenuAnchorEl}
            open={categoryMenuOpen}
            onClose={handleCategoryMenuClose}
            MenuListProps={{
              'aria-labelledby': 'category-button',
            }}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            PaperProps={{
              className: 'category-menu-paper',
            }}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={handleCategoryMenuClose} className="category-menu-item">
              <BlurCircularOutlinedIcon fontSize="small" /> Thekua
            </MenuItem>
            <MenuItem onClick={handleCategoryMenuClose} className="category-menu-item">
              <EmojiFoodBeverageOutlinedIcon fontSize="small" /> Cookies
            </MenuItem>
            <MenuItem onClick={handleCategoryMenuClose} className="category-menu-item">
              <SetMealOutlinedIcon fontSize="small" /> Raw Spices
            </MenuItem>
            <MenuItem onClick={handleCategoryMenuClose} className="category-menu-item">
              <BreakfastDiningOutlinedIcon fontSize="small" /> Gujiya
            </MenuItem>
            <MenuItem onClick={handleCategoryMenuClose} className="category-menu-item">
              <AcUnitOutlinedIcon fontSize="small" /> Pickle
            </MenuItem>
            <MenuItem onClick={handleCategoryMenuClose} className="category-menu-item">
              <AcUnitOutlinedIcon fontSize="small" /> Dry Fruits
            </MenuItem>
            <MenuItem onClick={handleCategoryMenuClose} className="category-menu-item">
              <AcUnitOutlinedIcon fontSize="small" /> Til Sweets
            </MenuItem>
            <MenuItem onClick={handleCategoryMenuClose} className="category-menu-item">
              <AcUnitOutlinedIcon fontSize="small" /> Masala Tea Bag
            </MenuItem>
            
          </Menu>
        </div>
        <div className="sub-header-center">
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/product">Product</a>
          <a href="/pages">Pages</a>
          <a href="/pages">About Us</a>
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
