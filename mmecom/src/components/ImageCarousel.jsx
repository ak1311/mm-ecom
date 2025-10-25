import React, { useState, useEffect, useRef } from 'react';
import './ImageCarousel.css';

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);

  const images = [
    {
      id: 1,
      src: '/images/product1.jpg',
      alt: 'Product 1',
      title: 'Summer Collection',
      description: 'Discover our latest summer fashion line with exclusive designs and premium quality materials.',
    },
    {
      id: 2,
      src: '/images/product2.jpg',
      alt: 'Product 2',
      title: 'Winter Essentials',
      description: 'Stay warm and stylish with our winter collection featuring cozy fabrics and modern designs.',
    },
    {
      id: 3,
      src: '/images/product3.jpg',
      alt: 'Product 3',
      title: 'Spring Fashion',
      description: 'Embrace the spring season with our vibrant colors and lightweight, comfortable clothing.',
    },
    {
      id: 4,
      src: '/images/product4.jpg',
      alt: 'Product 4',
      title: 'Autumn Styles',
      description: 'Perfect autumn wear that combines comfort, style, and functionality for the changing weather.',
    },
    {
      id: 5,
      src: '/images/product5.jpg',
      alt: 'Product 5',
      title: 'Casual Wear',
      description: 'Everyday casual clothing that doesn\'t compromise on style or comfort.',
    },
    {
      id: 6,
      src: '/images/product6.jpg',
      alt: 'Product 6',
      title: 'Formal Collection',
      description: 'Elegant formal wear for special occasions and professional settings.',
    },
    {
      id: 7,
      src: '/images/product7.jpg',
      alt: 'Product 7',
      title: 'Sports Gear',
      description: 'High-performance sports clothing designed for athletes and fitness enthusiasts.',
    },
    {
      id: 8,
      src: '/images/product8.jpg',
      alt: 'Product 8',
      title: 'Accessories',
      description: 'Complete your look with our carefully curated accessories and jewelry collection.',
    },
  ];

  const getDisplayImages = () => {
    const leftIndex = (currentIndex - 1 + images.length) % images.length;
    const centerIndex = currentIndex;
    const rightIndex = (currentIndex + 1) % images.length;

    return [
      { ...images[leftIndex], position: 'left' },
      { ...images[centerIndex], position: 'center' },
      { ...images[rightIndex], position: 'right' },
    ];
  };

  const startAnimation = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    // Step 1: First image disappears (1.2s)
    setTimeout(() => {
      // Step 2: Transform remaining images (1.2s)
      setTimeout(() => {
        // Update index
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        
        // Step 3: Reset animation state after a brief delay
        setTimeout(() => {
          setIsAnimating(false);
        }, 100);
      }, 1200);
    }, 1200);
  };

  useEffect(() => {
    const interval = setInterval(startAnimation, 6000);
    return () => clearInterval(interval);
  }, [images.length, isAnimating]);

  const displayImages = getDisplayImages();

  return (
    <div className="image-carousel" ref={containerRef}>
      <div className={`carousel-container ${isAnimating ? 'animating' : ''}`}>
        {displayImages.map((image) => (
          <div
            key={`${image.id}-${image.position}`}
            className={`carousel-item ${image.position}`}
            data-position={image.position}
          >
            <div className="image-container">
              <img
                src={image.src}
                alt={image.alt}
                className="carousel-image"
                onError={(e) => {
                  e.target.src = `https://picsum.photos/800/500?random=${image.id}`;
                }}
              />
              <div className="image-overlay">
                <div className="content">
                  <h2 className="product-title">{image.title}</h2>
                  <p className="product-description">{image.description}</p>
                  <button className="shop-button">Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;