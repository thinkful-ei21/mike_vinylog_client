import React from 'react';
import './landing-page.css';
import {connect} from 'react-redux';
// import { closeWelcomeBox } from '../../actions/welcome-box-actions';


export function LandingPage (props) {
  
  // closeBox() {
  //   this.props.dispatch(closeWelcomeBox());
  // }

  const user =props.currentUser.username;

  return ( 
    <div className="landing" role="complementary" aria-live="polite" aria-atomic="true">
      <h1 className="welcome">Welcome {user}!</h1>
      {/* <span role="button"
        className="close"
        onClick={e => {
          this.closeBox();
          }
        }
        >&#9746;</span> */}
      <p className="desc">Search by artist name, album title, or song title to retrieve a list of albums.<br />You can then add them to your collection.
      </p>
    </div>
  )
}

 const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  loggedIn: state.auth.currentUser !== null,
  // welcome: state.welcome.welcome,
 })

export default connect(mapStateToProps)(LandingPage);