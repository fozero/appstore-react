import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import SearchResult from '../pages/search_result/SearchResult';
import Profile from '../pages/profile/Profile';


const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/search/result" component={SearchResult} />
      <Route exact path="/profile" component={Profile} />
    </Switch>
  </HashRouter>
);

export default BasicRoute;