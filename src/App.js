import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import LandingPage from './components/landing-page/landing-page';
import Register from './components/register/register';
import Login from './components/login/login';
import Dashboard from './components/dashboard/dashboard';
import PrivateRoute from './components/private-route';
import Header from './components/header/header';
import Collection from './components/collection/collection';
import Wishlist from './components/wishlist/wishlist';

class App extends Component {
  render() {
    return (
      <BrowserRouter forceRefresh={true}>
        <div className="App">
            <Route path="/" component={Header} />
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={Login} />
            <Route path="/sign-up" component={Register} />
            <PrivateRoute exact path="/search" component={Dashboard} />
            <PrivateRoute exact path="/home" component={Collection} />
            <PrivateRoute path="/collection" component={Collection} />
            <PrivateRoute path="/wishlist" component={Wishlist} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
