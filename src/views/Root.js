import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from 'views/Dashboard';
import Reports from 'views/Reports';
import MainTemplate from '../templates/MainTemplate';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/reports" component={Reports} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
