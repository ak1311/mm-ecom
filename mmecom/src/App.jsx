import React from 'react';
import Header from './components/Header';
import SecondaryCarousel from './components/SecondaryCarousel';
import Footer from './components/Footer';
import WelcomeBanner from './components/WelcomeBanner'; // This was already here
import InStockSection from './components/InStockSection';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <SecondaryCarousel />
        <WelcomeBanner /> 
        <InStockSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
