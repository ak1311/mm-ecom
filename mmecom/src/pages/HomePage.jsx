import React from 'react';
import WelcomeBanner from '../components/WelcomeBanner';
import InStockSection from '../components/InStockSection';
import SecondaryCarousel from '../components/SecondaryCarousel';

const HomePage = () => {
  return (
    <>
      <SecondaryCarousel />
      <WelcomeBanner />
      <InStockSection />
      {/* <SecondaryCarousel /> */}
    </>
  );
};

export default HomePage;