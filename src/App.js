import React, { Component } from 'react';
import './App.css';
import LandingPage from './components/landing-page/landing-page';
import Register from './components/register/register';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage />
        <Register />
      </div>
    );
  }
}

export default App;
