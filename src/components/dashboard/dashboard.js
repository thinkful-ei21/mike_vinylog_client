import React from 'react';
import './dashboard.css';
import {connect} from 'react-redux';
import Search from '../search-field/search';


const Dashboard = (props) => {
  const user =props.currentUser.username;
  return (
  <div className='dashboard'>
        <h2>Welcome {user}!</h2>
        <p>To start your collection, search by artist name to retrieve a list of albums.
        </p>
        <Search />
  </div>
  )
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  loggedIn: state.auth.currentUser !== null,
 })

export default connect(mapStateToProps)(Dashboard);