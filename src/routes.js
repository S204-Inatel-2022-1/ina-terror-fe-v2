import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login"
import Emf from "./Pages/Emf"

const rootElement = document.getElementById("root");
export default function () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/menu" component={Emf} />
      </Switch>
    </BrowserRouter>
  );
}
