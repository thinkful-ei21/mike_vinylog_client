import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';
import {connect} from 'react-redux';
import {clearAuth} from '../../actions/auth-actions';
import {clearAuthToken} from '../../local-storage';
import NavComponent from '../hamburger-nav/nav';

export class Header extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
    this.props.history.push('/');
  }

  goToCollection() {
    return this.props.history.push('/collection');
  }

  goToWishlist() {
    return this.props.history.push('./wishlist');
  }

  newSearch() {
    return this.props.history.push('/search');
  }

  render() {
    let nav;

    if (this.props.loggedIn) {

      nav = <NavComponent />;

    }

    return (
      <header role="banner" aria-live="polite" aria-atomic="true">
        {this.props.loggedIn ? 
          <h1 className="header-title">Vinylog</h1>
        : ''}
        {nav}
      </header>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  loggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps)(Header);