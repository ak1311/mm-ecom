import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import Profile from './components/Profile';
import Loader from './components/Loader'; // The initial spinner
import SkeletonLoader from './components/SkeletonLoader'; // The new skeleton
import './App.css';

function App() {
  const [loadingState, setLoadingState] = useState('loading'); // 'loading', 'skeleton', 'loaded'

  useEffect(() => {
    // 1. Initial spinner loading
    const initialTimer = setTimeout(() => {
      setLoadingState('skeleton');
    }, 1500); // Show spinner for 1.5 seconds

    // 2. Skeleton loading
    const skeletonTimer = setTimeout(() => {
      setLoadingState('loaded');
    }, 3500); // Show skeleton for 2 seconds after spinner (total 3.5s)

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(skeletonTimer);
    };
  }, []);

  if (loadingState === 'loading') {
    return <Loader />;
  }

  if (loadingState === 'skeleton') {
    return <SkeletonLoader />;
  }

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
          
          {/* Route for the 404 page */}
          <Route path="/404" element={<NotFoundPage />} />

          {/* This is a catch-all route for any other path */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
