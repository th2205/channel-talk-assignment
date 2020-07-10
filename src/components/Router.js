import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import HomeContainer from '../containers/HomeContainer';
import Header from './Header';

export default () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={HomeContainer} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
