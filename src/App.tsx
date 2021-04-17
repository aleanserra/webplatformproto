import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Equipments from "./app/components/equipments/equipments";
import Login from "./app/components/login/login";
import "./app.scss";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/equipments">
          <Equipments />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
