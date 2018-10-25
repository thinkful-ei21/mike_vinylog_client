import React from 'react';
import './landing-page.css';

export default function LandingPage (props) {

  const goToSignIn = e => {
    return props.history.push('/login')
  }

  return (
    <div className="landing-page" style={{ minHeight: '100%' }}>
      <div className="landing" role="complementary" aria-live="polite" aria-atomic="true">
        <h2>
        For music collectors to catalog their collection and create a wishlist.
        </h2>
        <p className="desc">Search by album title or artist name to retrieve a list of albums. You can then add them to your collection or wishlist.<br /><br />Once albums are acquired, you can then remove from wishlist and add albums to collection.
        </p>
        <button
          onClick={goToSignIn}
        >
        Sign In
        </button>
      </div>
    </div>
  )
}
