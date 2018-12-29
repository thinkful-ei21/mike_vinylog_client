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
    // let user;
    // let userWelcome;
    let nav;

    if (this.props.loggedIn) {

      nav = <NavComponent />;

      // user =this.props.currentUser.username;

      // userWelcome = (
      //   <div className="landing" role="complementary" aria-live="polite" aria-atomic="true">
      //     <h1 className="welcome">Welcome {user}!</h1>
      //   </div>
      // );

    }

    return (
      <header role="banner" aria-live="polite" aria-atomic="true">
        {this.props.loggedIn ? 
        <Link to={{pathname: "/search"}} style={{textDecorationLine: "none"}}>
          <h1 className="header-title">Vinylog</h1>
        </Link>
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