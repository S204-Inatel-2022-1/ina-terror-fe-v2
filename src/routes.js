import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login"

const rootElement = document.getElementById("root");
export default function () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        {/* <Route path="/about" component={} /> */}
      </Switch>
    </BrowserRouter>
  );
}
