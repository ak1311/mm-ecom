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

          <button className="explore-button">Explore All</button>
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