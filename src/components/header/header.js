import React from 'react';
import './header.css';
import {connect} from 'react-redux';
import {clearAuth} from '../../actions/auth-actions';
import {clearAuthToken} from '../../local-storage';

export class Header extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    const user =this.props.currentUser.username;

    let logOutButton;
    if (this.props.loggedIn) {
        logOutButton = (
            <button 
            className="logout-button"
            onClick={() => this.logOut()}
            >Log out</button>
        );
    }

    return (
      <div className='landing'>
        <p>
            Welcome {user}! To start your collection search for album title.
        </p>
        {logOutButton}
      </div>
    )
  }
}

 const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  loggedIn: state.auth.currentUser !== null,
 })

export default connect(mapStateToProps)(Header);