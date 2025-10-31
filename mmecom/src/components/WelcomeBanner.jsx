import React from 'react';
import './WelcomeBanner.css';

const WelcomeBanner = () => {
  return (
    <section className="welcome-banner-container">
      <div className="welcome-banner">
        <div className="banner-content">
          <h1>Welcome Offer</h1>
          <div className="banner-offer-details">
            <p>Get flat 10% OFF on first order. use:</p>
            <div className="coupon-code">
              <span>WELCOME10</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeBanner;