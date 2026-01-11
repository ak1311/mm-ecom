import React from 'react';
import './InfoSection.css';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';

const InfoSection = () => {
  return (
    <section className="info-section">
      <div className="info-container">
        <div className="info-left">
          <h4>Natural Beauty</h4>
          <h2>Blossoming Elegance</h2>
          <p className="info-paragraph">
            Immerse yourself in the delicate charm of our floral collection. 
            Each piece is inspired by the vibrant colors and intricate patterns found in nature's finest blooms. 
            Experience the freshness and purity that brings a touch of serenity to your everyday life.
          </p>
          
          <div className="info-list">
            <div className="info-list-item">
              <SpaOutlinedIcon className="info-icon" />
              <span>Hand-picked fresh flowers</span>
            </div>
            <div className="info-list-item">
              <SpaOutlinedIcon className="info-icon" />
              <span>Artistically arranged bouquets</span>
            </div>
            <div className="info-list-item">
              <SpaOutlinedIcon className="info-icon" />
              <span>Sustainable and eco-friendly</span>
            </div>
          </div>

          <button className="explore-button">Explore All  
            &nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="10" viewBox="0 0 22 10" fill="none">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M-6.00875e-07 5.00293C-8.53508e-06 4.49667 0.410391 4.08626 0.916652 4.08625L18.8243 4.08597L16.6703 1.99344C16.3071 1.64068 16.2987 1.06033 16.6515 0.697209C17.0042 0.334082 17.5846 0.325677 17.9477 0.678437L21.7221 4.3451C21.8998 4.51771 22.0001 4.75488 22.0001 5.0026C22.0001 5.25032 21.8998 5.48749 21.7221 5.6601L17.9477 9.32677C17.5846 9.67953 17.0042 9.67112 16.6515 9.308C16.2987 8.94487 16.3071 8.36453 16.6703 8.01177L18.8242 5.9193L0.91668 5.91959C0.410419 5.9196 7.38796e-06 5.5092 -6.00875e-07 5.00293Z" fill="#ffffffff"></path>
                          </svg>
          </button>
        </div>
        
        <div className="info-right">
          <div className="image-grid">
            <img src="/assets/flower/flower-1.jpg" alt="Flower 1" />
            <img src="/assets/flower/flower-2.jpg" alt="Flower 2" />
            <img src="/assets/flower/flower-3.jpg" alt="Flower 3" />
            <img src="/assets/flower/flower-4.jpg" alt="Flower 4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;