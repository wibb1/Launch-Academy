import React from "react"
import Greeting from "./components/Greeting"
import Goodbye from "./components/Goodbye"
import NavBar from "./components/NavBar"
import CustomGreeting from "./components/CustomGreeting"
import { BrowserRouter, Route } from "react-router-dom"

const App = props => {
  return (
  <BrowserRouter>
    <Route path="/" component={NavBar} />
  </BrowserRouter>
  )
}

export default App
