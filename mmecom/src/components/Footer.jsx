import React from 'react';
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'; // Placeholder for Threads

const Footer = () => {
  return (
    <footer className="footer">
      <div className="upper-footer">
        <div className="footer-columns">
          <div className="footer-column-one">
            <img src="/assets/mm.png" alt="Logo" className="footer-logo" />
            <p className="footer-description">
              Discover the magic of Mithila with our exclusive collection. We bring you authentic, handcrafted treasures that tell a story of tradition and artistry.
            </p>
            <h3 className="follow-us-header">Follow Us</h3>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer"><XIcon /></a>
              <a href="https://threads.net" target="_blank" rel="noopener noreferrer"><AlternateEmailIcon /></a>
            </div>
          </div>
          <div className="footer-column"></div>
          <div className="footer-column"></div>
        </div>
      </div>
      <div className="lower-footer">
        <div className="lower-footer-content">
          <div className="copyright-text">
            Copyright 2025 MITHILA MAGIC
          </div>
          <div className="footer-links">
            <a href="/">Home</a>
            <a href="/terms">Terms</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;