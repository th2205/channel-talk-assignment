import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import HomeContainer from '../containers/HomeContainer';
import FormContainer from '../containers/FormContainer';
import SearchContainer from '../containers/SearchContainer';
import Header from './Header';

export default () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={HomeContainer} />
      <Route path="/add" component={FormContainer} />
      <Route path="/search" component={SearchContainer} />
      <Route path="/search?q=:word" component={SearchContainer} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
