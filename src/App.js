import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LandingPage from './components/landing-page/landing-page';
import Register from './components/register/register';
import Login from './components/login/login';
import Dashboard from './components/dashboard/dashboard';
import PrivateRoute from './components/private-route';
import Header from './components/header/header';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={LandingPage} />
          <Route exact path="/" component={Login} />
          <Route exact path="/sign-up" component={Register} />
          <PrivateRoute path="/" component={Header} />
          <PrivateRoute  path="/home" component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
