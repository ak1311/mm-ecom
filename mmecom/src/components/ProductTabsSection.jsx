import React, { useState } from 'react';
import ProductCard from './ProductCard';
import './ProductTabsSection.css';

const ProductTabsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Dummy product data
  const products = [
    { id: 1, title: 'Product 1', price: 59.99, description: 'A short description.', image: 'assets/products/product-1.jpg', sizes: ['400gm', '800gm'] },
    { id: 2, title: 'Product 2', price: 69.99, description: 'Another description.', image: 'assets/products/product-2.jpg', sizes: ['400gm', '800gm'] },
    { id: 3, title: 'Product 3', price: 79.99, description: 'Third description.', image: 'assets/products/delicious-cookies-arrangement.jpg', sizes: ['400gm', '800gm'] },
    { id: 4, title: 'Product 4', price: 89.99, description: 'Fourth description.', image: 'assets/products/healthy-assortment-dry-fruits.jpg', sizes: ['400gm', '800gm'] },
    { id: 5, title: 'Product 5', price: 99.99, description: 'Fifth description.', image: 'assets/products/indian-sweet-traditional-festival-makar-sankranti-rajgira-laddu-made-from-amaranth-seed-bowl_54391-2698.jpg', sizes: ['400gm', '800gm'] },
    { id: 6, title: 'Product 6', price: 109.99, description: 'Sixth description.', image: 'assets/products/kaboompics_chocolate-chip-cookies-in-a-jar-20140.jpg', sizes: ['400gm', '800gm'] },
    { id: 7, title: 'Product 7', price: 119.99, description: 'Seventh description.', image: 'assets/products/pile-cookies-with-chocolate-chips.jpg', sizes: ['400gm', '800gm'] },
    { id: 8, title: 'Product 8', price: 129.99, description: 'Eighth description.', image: 'assets/products/top-view-yummy-sand-cookies-perfect-sweets-cup-tea-white-surface.jpg', sizes: ['400gm', '800gm'] },
    { id: 9, title: 'Product 9', price: 139.99, description: 'Ninth description.', image: 'assets/products/vecteezy_thekua-is-an-indian-sweet-dish-popular-in-uttarpradesh_16282839.jpg', sizes: ['400gm', '800gm'] },
    { id: 10, title: 'Product 10', price: 149.99, description: 'Tenth description.', image: 'assets/products/vecteezy_thekua-is-an-indian-sweet-dish-popular-in-uttarpradesh_16282883.jpg', sizes: ['400gm', '800gm'] },
    { id: 11, title: 'Product 11', price: 159.99, description: 'Eleventh description.', image: 'assets/products/vecteezy_thekua-is-an-indian-sweet-dish-popular-in-uttarpradesh_16283141.jpg', sizes: ['400gm', '800gm'] },
    { id: 12, title: 'Product 12', price: 169.99, description: 'Twelfth description.', image: 'assets/products/vecteezy_thekua-is-an-indian-sweet-dish-popular-in-uttarpradesh_16283222.jpg', sizes: ['400gm', '800gm'] },
  ];

  const tabs = [
    { label: 'Tab 1', products: products.slice(0, 4) },
    { label: 'Tab 2', products: products.slice(4, 7) },
    { label: 'Tab 3', products: products.slice(7, 12) },
  ];

  return (
    <div className="product-tabs-section">
      <h2 className="section-heading">Our Products</h2>
      <p className="section-description">Discover our wide range of delicious products.</p>
      <div className="tabs-container">
        <div className="tabs">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`tab-button ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="tab-content">
          <div className="product-grid">
            {tabs[activeTab].products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTabsSection;
