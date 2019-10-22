import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "../view/Login";
// import PrivateRoute from "./PrivateRoute"; // for wrapping the Dashboard once its ready

const appRoutes = () => (
  <Switch>
    <Route path="/login" component={Login} />

    {/* <Route path="/register" component={Register} />    ====Not implemented Yet
    <Route path="/" component={Dashboard} /> */}
    <Route render={() => <Redirect to="/" />} />
  </Switch>
);

export default appRoutes;