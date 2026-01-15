import React from 'react';
import WelcomeBanner from '../components/WelcomeBanner';
import InStockSection from '../components/InStockSection';
import SecondaryCarousel from '../components/SecondaryCarousel';
import ProductTabsSection from '../components/ProductTabsSection';
import InfoSection from '../components/InfoSection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialSection from '../components/TestimonialSection';

const HomePage = () => {
  return (
    <>
      <SecondaryCarousel />
      <WelcomeBanner />
      <ProductTabsSection />
      <InfoSection />
      <TestimonialSection />
      <FeaturesSection />
      {/* <InStockSection /> */}
      {/* <SecondaryCarousel /> */}
    </>
  );
};

export default HomePage;