import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: "Quality Products",
      description: "We ensure the best quality for our customers.",
      icon: "/assets/icons/icon-1.png"
    },
    {
      id: 2,
      title: "Free Shipping",
      description: "Free shipping on all orders over $50.",
      icon: "/assets/icons/icon-2.png"
    },
    {
      id: 3,
      title: "Secure Payment",
      description: "100% secure payment gateways.",
      icon: "/assets/icons/icon-3.png"
    },
    {
      id: 4,
      title: "24/7 Support",
      description: "Dedicated support team available anytime.",
      icon: "/assets/icons/icon-4.png"
    },
    {
      id: 5,
      title: "Easy Returns",
      description: "Hassle-free return policy within 30 days.",
      icon: "/assets/icons/icon-5.png"
    }
  ];

  return (
    <div className="features-section">
      <div className="features-container">
        {features.map((feature) => (
          <div className="feature-item" key={feature.id}>
            <div className="feature-icon">
              <img src={feature.icon} alt={feature.title} />
            </div>
            <div className="feature-text">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;