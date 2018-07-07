import React from 'react';
import './landing-page.css';
import Login from '../login/login';
import {BrowserRouter as Router, Route} from 'react-router-dom';


const LandingPage = () => {
  return (
  <div className='landing'>
      {/* <h1>
        An app for music collectors to catalog their collection.
      </h1> */}
      <Router>
        <Route exact path="/login" component={Login} />
      {/* <p className='landing-desc-left'>
      A billion trillion encyclopaedia galactica. Consciousness science at the edge of forever, vanquish the impossible, corpus paroxysm of global death quasar a </p>
      
      <p className="landing-desc-right">Trillion realm of the galaxies, vanquish the impossible tingling of the spine, the carbon in our apple pies star stuff 
      </p> */}
      </Router>
  </div>
  )
}

export default LandingPage;