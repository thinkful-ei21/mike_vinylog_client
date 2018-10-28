// React responsive navbar from https://codepen.io/danbuda/post/a-react-navbar-component

import React from 'react';
import { Link }  from 'react-router-dom';
import './nav.css';
import {connect} from 'react-redux';
import {clearAuth} from '../../actions/auth-actions';
import {clearAuthToken} from '../../local-storage';

export class NavComponent extends React.Component {

  burgerToggle() {
    let linksEl = document.querySelector(".narrowLinks");
    if (linksEl.style.display === "block") {
      linksEl.style.display = "none";
    } else {
      linksEl.style.display = "block";
    }

  }

  menuFunction() {
    let x = document.getElementById("icon");
    x.classList.toggle("change");
    this.burgerToggle();
}

  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
    this.props.history.push('/');
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

    return (
      <nav>
        <div className="navWide">
          <div className="wideDiv">
            <Link to="collection">Collection</Link>
            <Link to="wishlist">Wishlist</Link>
            <Link to="search">Search</Link>
            {logOutButton}
          </div>
        </div>
        <div className="navNarrow" id="icon">
          <div className="burger" onClick={() => this.menuFunction()}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          <div className="narrowLinks" >
            <Link to="collection" onClick={this.burgerToggle}>
            Collection
            </Link>
            <Link to="wishlist" onClick={this.burgerToggle}>
            Wishlist
            </Link>
            <Link to="search" onClick={this.burgerToggle}>
            Search
            </Link>
            {logOutButton}
          </div>
        </div>
      </nav>
    );
  }
};

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(NavComponent);