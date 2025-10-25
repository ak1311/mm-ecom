import './App.css'
import React from 'react';
import Header from './components/Header';
import ImageCarousel from './components/ImageCarousel';
import './App.css';

function App() {
  return (
    
    <div className="App">
      <Header />
      {/* Additional content can be added here */}
      <main>
        <ImageCarousel />
      </main>
    </div>
  );
}

export default App;
