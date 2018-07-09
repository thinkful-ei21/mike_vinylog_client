import React from 'react';
import './landing-page.css';
import Login from '../login/login';
import {BrowserRouter as Router, Route} from 'react-router-dom';


const LandingPage = () => {
  return (
  <div className='landing'>
      {/* <Router>
        <Route exact path="/login" component={Login} />
      </Router> */}
  </div>
  )
}

export default LandingPage;