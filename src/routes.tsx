import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="" component={NotFound} />
    </Switch>
  );
};

export default Routes;
