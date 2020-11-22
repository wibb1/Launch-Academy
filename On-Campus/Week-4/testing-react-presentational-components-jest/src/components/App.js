import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import ElephantContainer from "./ElephantContainer"
import ElephantFacts from "./ElephantFacts"

const App = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ElephantContainer} />
        <Route exact path="/facts" component={ElephantFacts} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
