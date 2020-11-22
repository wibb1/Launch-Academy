import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";

const App = (props) => {
  return (
    <BrowserRouter>
        <Route path="/" component={NavBar} />
    </BrowserRouter>
  );
};

export default App;
