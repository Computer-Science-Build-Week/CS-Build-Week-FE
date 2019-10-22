import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "../view/Login";
import Register from "../view/Register";
import Game from "../view/Game";
import PrivateRoute from "./PrivateRoute";

const appRoutes = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Register} />
    <PrivateRoute path="/" component={Game} />
    <Route render={() => <Redirect to="/" />} />
  </Switch>
);

export default appRoutes;
