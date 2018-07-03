import React from 'react';
import './dashboard.css';

const Dashboard = (props) => {
  const user = props.user.username;
  console.log(user);
  return (
  <div className='dashboard'>
  <h2>This is your dashboard</h2>
      <p className='dashboard-desc'>
       dashboard elements goes here
      </p>
  </div>
  )
}

export default Dashboard;