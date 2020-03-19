import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/Homepage";
// import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route exact path="/saved" component={Saved} /> */}
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </Router>
  );
};

export default App;
