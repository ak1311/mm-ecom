import React, { useState, useEffect, useMemo } from 'react';
import './SecondaryCarousel.css';

// Sample data for the new carousel
const secondaryImages = [
  {
    id: 1,
    src: '/assets/Slide/Slide-1.jpg',
    alt: 'Fashion 1',
    title: 'Urban Explorer',
    description: 'Navigate the city streets in style with our latest urban collection.',
  },
  {
    id: 2,
    src: '/assets/Slide/Slide-2.jpg',
    alt: 'Fashion 2',
    title: 'Weekend Getaway',
    description: 'Comfortable and chic outfits perfect for your next escape.',
  },
  {
    id: 3,
    src: '/assets/Slide/Slide-3.jpg',
    alt: 'Fashion 3',
    title: 'Office Elegance',
    description: 'Redefine your workwear with our sophisticated and modern designs.',
  },
  {
    id: 4,
    src: '/assets/Slide/Slide-4.jpg',
    alt: 'Fashion 4',
    title: 'Vintage Revival',
    description: 'Classic styles reimagined for the contemporary wardrobe.',
  },
  {
    id: 5,
    src: '/assets/Slide/Slide-5.jpg',
    alt: 'Fashion 5',
    title: 'Minimalist Dreams',
    description: 'Clean lines and simple silhouettes for an understated look.',
  },
  {
    id: 6,
    src: '/assets/Slide/Slide-6.jpg',
    alt: 'Fashion 6',
    title: 'Bohemian Spirit',
    description: 'Free-spirited and artistic, for the creative soul.',
  },
  {
    id: 7,
    src: '/assets/Slide/Slide-7.jpg',
    alt: 'Fashion 7',
    title: 'Active Life',
    description: 'Performance wear that keeps up with your active lifestyle.',
  },
  {
    id: 8,
    src: '/assets/Slide/Slide-8.jpg',
    alt: 'Fashion 8',
    title: 'Evening Glamour',
    description: 'Dazzle after dark with our stunning evening wear collection.',
  },
];

const SecondaryCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let animationTimeout;

    const timer = setInterval(() => {
      setIsAnimating(true);
      // After the animation duration, update the index and reset animation state
      animationTimeout = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % secondaryImages.length);
        setIsAnimating(false);
      }, 1000); // This should match the CSS animation duration
    }, 5000); // 1.5s animation + 4s wait time

    return () => {
      clearInterval(timer);
      clearTimeout(animationTimeout);
    };
  }, []);

  const displayImages = useMemo(() => {
    const images = [];
    // This logic creates a "disappearing" effect for the first item
    // and brings a new one on the right.
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % secondaryImages.length;
      images.push(secondaryImages[index]);
    }
    return images;
  }, [currentIndex]);

  return (
    <div className="secondary-carousel">
      <div className={`secondary-carousel-container ${isAnimating ? 'animating' : ''}`}>
        {displayImages.map((image, i) => (
          <div key={image.id} className={`secondary-carousel-item item-${i}`}>
            <img src={image.src} alt={image.alt} className="secondary-carousel-image" />
            <div className="secondary-carousel-overlay">
              <div className="secondary-carousel-content">
                <h2>{image.title}</h2>
                <p>{image.description}</p>
                <button className="secondary-shop-button">Shop Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondaryCarousel;