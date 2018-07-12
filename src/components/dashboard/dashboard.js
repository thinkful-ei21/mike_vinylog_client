import React from 'react';
import './dashboard.css';
import {connect} from 'react-redux';
import SearchResults from '../search-results/search-results';

export class Dashboard extends React.Component {

  render() {
    return (
      <div>
        <SearchResults />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  loggedIn: state.auth.currentUser !== null,
  collection: state.auth.currentUser.collection
})

export default connect(mapStateToProps)(Dashboard);
