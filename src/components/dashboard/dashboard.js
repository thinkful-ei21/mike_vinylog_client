import React from 'react';
import './dashboard.css';
import {connect} from 'react-redux';
// import Search from '../search-field/search';

const Dashboard = (props) => {
  const user = props.user.username;
  console.log(user);
  return (
  <div className='dashboard'>
  <h2>This is your dashboard</h2>
       {/* <Search /> */}
  </div>
  )
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  loggedIn: state.auth.currentUser !== null,
 })

export default connect(mapStateToProps)(Dashboard);