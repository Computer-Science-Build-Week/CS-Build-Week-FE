import { Route, Switch } from "react-router-dom";
import Login from "../view/Login";

const appRoutes = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route render={() => <Redirect to="/" />} />

    {/* <Route path="/register" component={Register} />    ====Not implemented Yet
    <Route path="/" component={Dashboard} /> */}
  </Switch>
);

export default appRoutes;
