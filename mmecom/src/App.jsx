import React from 'react';
import Header from './components/Header';
import ImageCarousel from './components/ImageCarousel';
import SecondaryCarousel from './components/SecondaryCarousel';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        
        <SecondaryCarousel />
      </main>
    </div>
  );
}

export default App;
