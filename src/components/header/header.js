import React from 'react';
import './header.css';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import { Link } from 'react-router-dom';
import {clearAuth} from '../../actions/auth-actions';
import {clearAuthToken} from '../../local-storage';
import Search from '../search-field/search';
import { collection } from '../../actions/collection-actions';

export class Header extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  goToCollection() {
    this.props.history.push('/collection');
    return <Redirect to="/collection"></Redirect>;

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
      <div className='header'>
      {viewCollectionButton}
      {logOutButton}
        <h2>Welcome {user}!</h2>
        <p>To start your collection,<br /> search by artist name to retrieve a list of albums.
        </p>
        <Search />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  loggedIn: state.auth.currentUser !== null,
  collection: state.auth.currentUser.collection
})

export default connect(mapStateToProps)(Header);