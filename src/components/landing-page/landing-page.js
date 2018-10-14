import React from 'react';
import './landing-page.css';
import {connect} from 'react-redux';


export function LandingPage (props) {
  const user =props.currentUser.username;

  return ( 
    <div className="landing" role="complementary" aria-live="polite" aria-atomic="true">
      <h1 className="welcome">Welcome {user}!</h1>
    </div>
  )
}

 const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  loggedIn: state.auth.currentUser !== null
 })

export default connect(mapStateToProps)(LandingPage);