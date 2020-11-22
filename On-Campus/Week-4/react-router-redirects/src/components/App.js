import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import MoviesIndex from "./MoviesIndex"
import NewMovieForm from "./NewMovieForm"

const App = props => {
  return (
    <BrowserRouter>
      <Route exact path="/movies" component={MoviesIndex} />
      <Route exact path="/new" component={NewMovieForm} />
    </BrowserRouter>
  )
}

export default App