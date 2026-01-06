import React from 'react';
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'; // Placeholder for Threads

const Footer = () => {
  return (
    <footer className="footer" style={{ position: 'relative' }}>
      <div className="rotating-text-wrapper">
        <svg viewBox="0 0 200 200" width="100%" height="100%">
          <defs>
            <path id="textCircle" d="M 100, 100 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0" />
          </defs>
          <circle cx="100" cy="100" r="60" stroke="#ffffff" strokeWidth="28" fill="none" />
          <text fontSize="14" fontWeight="bold" fill="#7d99aa" letterSpacing="2">
            <textPath href="#textCircle" startOffset="0">
              MITHILA MAGIC  •  a taste of Mithila  •
            </textPath>
          </text>
        </svg>
      </div>
      <div style={{
        position: 'absolute',
        top: '-62.5px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '125px',
        height: '125px',
        backgroundColor: '#FFCC66',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        zIndex: 10
      }}>
        <img src="/assets/logo.png" alt="Logo" style={{ width: '60%', height: 'auto', mixBlendMode: 'multiply' }} />
      </div>
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