import React from 'react';
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

    // let logOutButton;
    // let newSearchButton;
    // let viewCollectionButton;
    // let viewWishlistButton;
    let user;
    let userWelcome;
    let nav;

    if (this.props.loggedIn) {

      nav = <NavComponent />;
      // logOutButton = (
      //     <button 
      //     className="logout-button"
      //     onClick={() => this.logOut()}
      //     >Log out</button>
      // );

      // viewCollectionButton = (
      //   <button 
      //     className="view-collection-button"
      //     onClick={() => this.goToCollection()}
      //     >My Collection
      //   </button>
      // );

      // viewWishlistButton = (
      //   <button
      //     className= "view-collection-button"
      //     onClick={() => this.goToWishlist()}
      //     >My Wishlist
      //   </button>
      // );

      // newSearchButton = (
      //   <button onClick={() => this.newSearch()}
      //     className="view-collection-button">
      //     New Search
      //   </button>
      // );

      user =this.props.currentUser.username;

      userWelcome = (
        <div className="landing" role="complementary" aria-live="polite" aria-atomic="true">
          <h1 className="welcome">Welcome {user}!</h1>
        </div>
      );

    }

    return (
      <header role="banner" aria-live="polite" aria-atomic="true">
        <h1 className="header-title">Vinylog</h1>
        {nav}
        {/* <nav> */}
          {/* <span className="logout-button">
            {logOutButton}
          </span> */}
         {/*  <span className="new-search-button">
            {newSearchButton}
          </span>
          <span className="wishlist-button">
            {viewWishlistButton}
          </span>
          <span className="collection-button">
            {viewCollectionButton}
          </span>
        </nav> */}
      </header>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  loggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps)(Header);