import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

const Routes = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route path="/home" component={HomePage} />
    </Switch>
    </BrowserRouter>
  );
};

export default Routes;
