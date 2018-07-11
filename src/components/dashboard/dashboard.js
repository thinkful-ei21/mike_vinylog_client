import React from 'react';
import './dashboard.css';
import {connect} from 'react-redux';
import Search from '../search-field/search';


const Dashboard = (props) => {
  const user =props.currentUser.username;
  return (
  <div className='dashboard' role="main" aria-live="polite" aria-atomic="true">
    <Search />
  </div>
  )
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  loggedIn: state.auth.currentUser !== null,
 })

export default connect(mapStateToProps)(Dashboard);