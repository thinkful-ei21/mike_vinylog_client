import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Router} from 'react-router';
import LandingPage from './components/landing-page/landing-page';
import Register from './components/register/register';
import Login from './components/login/login';
import Dashboard from './components/dashboard/dashboard';
import PrivateRoute from './components/private-route';
import Header from './components/header/header';
import Collection from './components/collection/collection';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

class App extends Component {
  render() {
    return (
      <Router history={history} forceRefresh={true}>
        <div className="App">
          {/* <Switch > */}
            <Route path="/" component={Header} />
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route path="/sign-up" component={Register} />
            <PrivateRoute exact path="/home" component={LandingPage} />
            <PrivateRoute exact path="/home" component={Dashboard} />
            <PrivateRoute path="/collection" component={Collection} />
          {/* </Switch> */}
        </div>
      </Router>
    );
  }
}

export default App;
