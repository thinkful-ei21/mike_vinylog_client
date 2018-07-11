import React from 'react';
import './landing-page.css';
import {connect} from 'react-redux';


const LandingPage = (props) => {
  const user =props.currentUser.username;
  return (
  <div className='landing' role="complementary" aria-live="polite" aria-atomic="true">
    <h1>Welcome {user}!</h1>
    <p className="landing-desc">Search by artist name, album title, or song title to retrieve a list of albums.<br /><br />You can then add them to your collection.
    </p>
  </div>
  )
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  loggedIn: state.auth.currentUser !== null,
 })

export default connect(mapStateToProps)(LandingPage);