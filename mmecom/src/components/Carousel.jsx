import React from 'react';
import Slider from 'react-slick';
import './Carousel.css';

// You need to import the slick-carousel CSS files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'linear'
  };

  // Replace these with your actual image paths
  const images = [
    '/assets/carousel/slide1.jpg',
    '/assets/carousel/slide2.jpg',
    '/assets/carousel/slide3.jpg',
  ];

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <div
              className="carousel-slide"
              style={{ backgroundImage: `url(${img})` }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;