import React from 'react';
import './SkeletonLoader.css';

const SkeletonLoader = () => {
  return (
    <div className="skeleton-wrapper">
      {/* Skeleton Header */}
      <div className="skeleton-header">
        <div className="skeleton-logo"></div>
        <div className="skeleton-nav"></div>
        <div className="skeleton-icons"></div>
      </div>
      <div className="skeleton-subheader"></div>

      {/* Skeleton Body */}
      <div className="skeleton-main">
        <div className="skeleton-carousel"></div>
        <div className="skeleton-banner"></div>
        <div className="skeleton-products-container">
          <div className="skeleton-product-card"></div>
          <div className="skeleton-product-card"></div>
          <div className="skeleton-product-card"></div>
          <div className="skeleton-product-card"></div>
        </div>
      </div>

      {/* Skeleton Footer */}
      <div className="skeleton-footer"></div>
    </div>
  );
};

export default SkeletonLoader;