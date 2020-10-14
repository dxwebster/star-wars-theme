import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import SearchPage from '../pages/SearchPage';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/search-page" exact component={SearchPage} />
  </Switch>
);

export default Routes;
