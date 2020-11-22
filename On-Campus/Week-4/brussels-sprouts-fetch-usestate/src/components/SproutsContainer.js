import React, { useState } from 'react';
import RandomSprout from './RandomSprout';
import SproutsIndex from './SproutsIndex';
import LongSprout from './LongSprout';

const SproutsContainer = (props) => {
  const [recipe, setRecipe] = useState("")
  const [longRecipe, setLongRecipe] = useState("")
  const [recipes, setRecipes] = useState([])

  const getRandomRecipe = () => {
    fetch('/api/v1/random-recipe')
    .then(response => response.json())
    .then(data => setRecipe(data))
    // your code here
  }

  const getAllRecipes = () => {
    fetch('/api/v1/recipes')
    .then(response => response.json())
    .then(data => setRecipes(data))
    //your code here
  }

  const getLongRecipe = () => {
    fetch('/api/v1/recipie-long')
    .then(response => response.json())
    .then(data => setLongRecipe(data))
  }

  const handleRandomClick = () => {
    getRandomRecipe();
  }

  const handleIndexClick = () => {
    getAllRecipes();
  }

  const handleLongClick = () => {
    getLongRecipe();
  }

  return(
    <div className="container">
      <h1>Sprout Fetcher</h1>
      <RandomSprout
        recipe={recipe}
      />
      <SproutsIndex
        recipes={recipes}
      />

      <LongSprout
        longRecipe={longRecipe}
      />

      <div className="buttons">
        <button onClick={handleRandomClick} className="btn">Get Random Recipe</button>

        <button onClick={handleIndexClick} className="btn">See All Recipes</button>

        <button onClick={handleLongClick} className="btn">See Longest Recipe Name</button>
      </div>
    </div>
  )
}

export default SproutsContainer;
