import React from "react";
import { Switch, Route } from "react-router-dom";
import MainContainer from "./MainContainer";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={MainContainer} />
  </Switch>
);

export default Routes;
