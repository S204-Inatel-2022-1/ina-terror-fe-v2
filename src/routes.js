import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login"
import Emf from "./Pages/Emf"
import Menu from "./Pages/Menu"
import Article from "./Pages/Article"
import Account from "./Pages/Account"
import Sightings from "./Pages/Sightings" 
import Camera from "./Pages/Camera"

const rootElement = document.getElementById("root");
export default function () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"component={Login} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/menu/emf" component={Emf} />
        <Route exact path="/menu/article" component={Article} />
        <Route exact path="/menu/account" component={Account} />
        <Route exact path="/menu/sightings" component={Sightings} />
        <Route exact path="/menu/camera" component={Camera} />
      </Switch>
    </BrowserRouter>
  );
}
