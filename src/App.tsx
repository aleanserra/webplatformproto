import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Equipments from "./app/components/equipments";
import Login from "./app/components/login";
import Navigation from "./app/components/navigation";
import "./app.scss";

const App = () => {
  const { token } = localStorage;
  const [validate, setValidate] = useState(token);
  return (
    <Router>
      {validate && <Navigation />}
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
