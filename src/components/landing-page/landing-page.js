import React from 'react';
import './landing-page.css';

const LandingPage = () => {
  return (
  <div className='landing'>
    <header className="landing-header">
      <h1 className="landing-title">Vinylog</h1>
    </header>
      <p className='landing-desc'>
        An app for music collectors to catalog their collection
      </p>
  </div>
  )
}

export default LandingPage;