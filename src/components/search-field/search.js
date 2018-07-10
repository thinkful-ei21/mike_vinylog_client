import React from 'react';
import './search.css';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {clearAuth} from '../../actions/auth-actions';
import {clearAuthToken} from '../../local-storage';
import SearchResults from '../search-results/search-results';

export class Search extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  goToCollection() {
    this.props.history.push('/collection');
    return <Redirect to="/collection"></Redirect>;
  }

  render() {
    //const user =this.props.currentUser.username;

    let viewCollectionButton;
    if (this.props.loggedIn) {
      viewCollectionButton = (
            <button 
            className="view-collection-button"
            onClick={() => this.goToCollection()}
            >My Collection</button>
        );
    }

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
        <SearchResults />
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  loggedIn: state.auth.currentUser !== null,
  collection: state.auth.currentUser.collection
})

export default connect(mapStateToProps)(Search);
