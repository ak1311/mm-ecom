import React from 'react';
import './NotFoundPage.css';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <img src="/assets/404.svg" alt="404 Not Found" className="not-found-image" />
      <h1>Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="go-home-button">
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;