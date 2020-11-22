import React from "react";
import { Link, Switch, Route } from "react-router-dom";

import Goodbye from "../components/Goodbye";
import Greeting from "../components/Greeting";
import CustomGreeting from "../components/CustomGreeting";

const NavBar = (props) => {
  return (
    <div className="row column">

      <div className="navbar">
        <Link to="/">Greeting</Link>
      </div>

      <div className="navbar">
        <Link to="/CustomGreeting">Custom Greeting</Link>
      </div>

      <div className="navbar">
        <Link to="/Goodbye">Goodbye</Link>
      </div>

      <Switch>
        <Route exact path="/" component={Greeting} />
        <Route exact path="/Goodbye" component={Goodbye} />
        <Route exact path="/CustomGreeting" component={CustomGreeting} />
      </Switch>

    </div>
  );
};

export default NavBar;
