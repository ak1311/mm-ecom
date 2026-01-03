import React from 'react';
import WelcomeBanner from '../components/WelcomeBanner';
import InStockSection from '../components/InStockSection';
import SecondaryCarousel from '../components/SecondaryCarousel';
import ProductTabsSection from '../components/ProductTabsSection';

const HomePage = () => {
  return (
    <>
      <SecondaryCarousel />
      <WelcomeBanner />
      <ProductTabsSection />
      {/* <InStockSection /> */}
      {/* <SecondaryCarousel /> */}
    </>
  );
};

export default HomePage;