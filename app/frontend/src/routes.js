import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import UserRegisterPage from './pages/UserRegisterPage';

const Routes = () => {
  return (
      <BrowserRouter>
      <React.StrictMode>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/register" component={UserRegisterPage} />
      </Switch>
      </React.StrictMode>
    </BrowserRouter>
  );
};

export default Routes;