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
    let x;

    if (this.props.loggedIn) {
      logOutButton = (
          <button 
          className="logout-button"
          onClick={() => this.logOut()}
          >Log out</button>
      );
    }

    return (
      <nav tabContainer>
        <div className="navWide">
          <div className="wideDiv">
            <Link to="collection">My Collection</Link>
            <Link to="wishlist">My Wishlist</Link>
            <Link to="search">New Search</Link>
            {logOutButton}
          </div>
        </div>
        <div className="navNarrow" id="icon">
          {/* <div className="burger" onClick={this.burgerToggle(this)}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div> */}
 
              <div className="burger" onClick={() => this.menuFunction()}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
              </div>
          {/* <i className="fa fa-bars fa-2x" onClick={this.burgerToggle} /> */}
          <div className="narrowLinks" >
            <Link to="collection" onClick={this.burgerToggle}>
            My Collection
            </Link>
            <Link to="wishlist" onClick={this.burgerToggle}>
            My Wishlist
            </Link>
            <Link to="search" onClick={this.burgerToggle}>
            New Search
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