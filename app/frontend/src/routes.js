import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import UserRegisterPage from './pages/UserRegisterPage';
import BillsPage from './pages/BillsPage';
import EarningsPage from './pages/EarningsPage';

function Routes() {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/register" component={UserRegisterPage} />
          <Route exact path="/bills" component={BillsPage} />
          <Route exact path="/earnings" component={EarningsPage} />
        </Switch>
      </React.StrictMode>
    </BrowserRouter>
  );
}

export default Routes;
