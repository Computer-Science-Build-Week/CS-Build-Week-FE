import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "../view/Login";
import Register from "../view/Register";
// import PrivateRoute from "./PrivateRoute"; // for wrapping the Dashboard once its ready

const appRoutes = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Register} />
    {/* <Route path="/" component={Dashboard} /> */}
    <Route render={() => <Redirect to="/" />} />
  </Switch>
);

export default appRoutes;
