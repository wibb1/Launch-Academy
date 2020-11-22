import React from "react"; //always required
import { BrowserRouter, Switch, Route } from "react-router-dom"; //imports required for the code below
import FAQContainer from "./FAQContainer"; //pulling data up from FAQContainer
import LauncherList from "./LauncherList"; //pulling data up from LauncherList
import LauncherShow from "./LauncherShow"; //pulling data up from LauncherShow


const App = (props) => {
  return (
    <BrowserRouter>
      <Switch> 
        <Route exact path="/" component={FAQContainer} />
        <Route exact path="/launchers" component={LauncherList} />
        <Route exact path="/launcher/:id" component={LauncherShow} />
      </Switch>
    </BrowserRouter>
  );
  // BroweserRouter allows the page to route to the correct page using a URL
  //Switch picks the correct path based on the input provided from below
};

export default App;
