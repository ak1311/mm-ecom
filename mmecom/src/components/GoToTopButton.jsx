import React, { useState, useEffect } from 'react';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './GoToTopButton.css';

const GoToTopButton = () => {
  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    showGoToTop && (
      <Fab
        aria-label="go to top"
        className="go-to-top-button"
        onClick={handleGoToTop}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    )
  );
};

export default GoToTopButton;