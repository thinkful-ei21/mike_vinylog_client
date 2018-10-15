import React from 'react';
import './landing-page.css';

export default function LandingPage () {

  return ( 
    <div className="landing" role="complementary" aria-live="polite" aria-atomic="true">
      <h2>
      ... for music collectors to catalog their vinyl collection.
      </h2>
      <p className="desc">Search by album title or artist name to retrieve a list of albums. You can then add them to your collection.
      </p>
    </div>
  )
}
