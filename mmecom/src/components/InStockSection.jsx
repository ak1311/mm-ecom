import React from 'react';
import './InStockSection.css';
import ProductCard from './ProductCard';

const InStockSection = () => {
  return (
    <section className="in-stock-section">
      <div className="products-section">
        <div className="in-stock-header">
          <h2>In Stock</h2>
          <button className="shipping-button">Quick Shipping, Fast Delivery</button>
        </div>
        <div className="product-cards-container">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <div className="delivery-banner">
        <img src="/assets/fast-delivery.svg" alt="Fast Delivery Banner" className="delivery-svg" />
      </div>
    </section>
  );
};

export default InStockSection;