import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import LightTheme from '../pages/LightTheme';
import DarkTheme from '../pages/DarkTheme';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/light-theme" exact component={LightTheme} />
    <Route path="/dark-theme" exact component={DarkTheme} />
  </Switch>
);

export default Routes;
