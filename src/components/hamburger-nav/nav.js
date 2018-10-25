// React responsive navbar from https://codepen.io/danbuda/post/a-react-navbar-component

import React from 'react';
import { Link }  from 'react-router-dom';
import './nav.css';


export default class NavComponent extends React.Component {

  burgerToggle() {
    let linksEl = document.querySelector(".narrowLinks");
    if (linksEl.style.display === "block") {
      linksEl.style.display = "none";
    } else {
      linksEl.style.display = "block";
    }
  }

  render() {
    return (
      <nav >
        <div className="navWide">
          <div className="wideDiv">
            <Link to="collection">My Collection</Link>
            <Link to="wishlist">My Wishlist</Link>
            <Link to="search">New Search</Link>
          </div>
        </div>
        <div className="navNarrow">
          <i className="fa fa-bars fa-2x" onClick={this.burgerToggle} />
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
          </div>
        </div>
      </nav>
    );
  }
  
};