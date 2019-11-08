import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Dashboard from './Dashboard';
import Reports from './Reports';
import MainTemplate from 'templates/MainTemplate';
import Login from "./Login";

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/reports" component={Reports}/>
        <Route path="/login" component={Login}/>
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
