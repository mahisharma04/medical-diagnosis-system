import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Medical Diagnosis App</h1>
      <p>
        Enter your symptoms to get a potential diagnosis.
      </p>
      <Link to="/symptoms">Start</Link>
    </div>
  );
}

export default HomePage;
