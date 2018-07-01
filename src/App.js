import React, { Component } from 'react';
import './App.css';
import LandingPage from './components/landing-page/landing-page';
import Register from './components/register/register';
import Login from './components/login/login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage />
        <Login />
        <Register />
      </div>
    );
  }
}

export default App;
