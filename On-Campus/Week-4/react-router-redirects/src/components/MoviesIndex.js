import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import MovieTile from "./MovieTile"

const MoviesIndex = props => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch("/api/v1/movies")
      .then(response => {
        if (response.ok) {
          return response
        } else {
          const errorMessage = `${response.status} (${response.statusText})`
          const error = new Error(errorMessage)
          throw error
        }
      })
      .then(response => response.json())
      .then(body => setMovies(body))
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const movieTiles = movies.map(movie => {
    return <MovieTile title={movie.title} key={movie.id} />
  })

  return (
    <div>
      <h1>My Favorite Movies</h1>
      {movieTiles}
      <Link to="/new">Add a Movie</Link>
    </div>
  )
}

export default MoviesIndex