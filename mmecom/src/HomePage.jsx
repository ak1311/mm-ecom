import React from 'react';
import Carousel from './../components/Carousel';
import WelcomeBanner from './../components/WelcomeBanner';
import InStockSection from './../components/InStockSection';
import SecondaryCarousel from './../components/SecondaryCarousel';

const HomePage = () => {
  return (
    <>
      <Carousel />
      <WelcomeBanner />
      <InStockSection />
      <SecondaryCarousel />
    </>
  );
};

export default HomePage;