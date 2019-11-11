import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux'
import Dashboard from './Dashboard';
import Reports from './Reports';
import MainTemplate from 'templates/MainTemplate';
import Login from "./Login";
import {routes} from "routes";
import store from "../store";

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path={routes.home} component={Dashboard}/>
          <Route path={routes.reports} component={Reports}/>
          <Route path={routes.login} component={Login}/>
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default Root;
