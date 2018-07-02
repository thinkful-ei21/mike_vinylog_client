import React from 'react';
import './dashboard.css';

const Dashboard = () => {
  return (
  <div className='dashboard'>
    <header className="dashboard-header">
      <h1 className="dashboard-title">Welcome to Vinylog!</h1>
    </header>
      <p className='dashboard-desc'>
        To start your collection search for album title.
      </p>
  </div>
  )
}

export default Dashboard;