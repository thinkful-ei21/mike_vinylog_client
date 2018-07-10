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

  goToCollection() {
    return this.props.history.push('/collection');
  }

  render() {

    let logOutButton;
    if (this.props.loggedIn) {
        logOutButton = (
            <button 
            className="logout-button"
            onClick={() => this.logOut()}
            >Log out</button>
        );
    }

    let viewCollectionButton;
    if (this.props.loggedIn) {
      viewCollectionButton = (
            <button 
            className="view-collection-button"
            onClick={() => this.goToCollection()}
            >My Collection</button>
        );
    }

    return (
      <header>
        <h1 className="header-title">Vinylog</h1>
        <h2>
          ... for music collectors to catalog their vinyl collection.
       </h2>
        <span className="logout-button">
          {logOutButton}
        </span>
        <span className="collection-button">
          {viewCollectionButton}
        </span>
      </header>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  loggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps)(Header);