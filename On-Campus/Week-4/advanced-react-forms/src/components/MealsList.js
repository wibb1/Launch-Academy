import React from "react"

const MealsList = props => {
  const { meals } = props
  const mealItems = meals.map(meal => {
    let mealDescription = <blockquote/>
    if (meal.description) {
      mealDescription = <blockquote>{meal.description}</blockquote>
    }
    return (
      <li key={meal.food}>
        <strong>{meal.meal}:</strong>
        &nbsp;{meal.food}
        {mealDescription}
      </li>
    )
  })

  return (
    <div>
      <h3 className="text-center">Daily Consumption</h3>
      <ul>{mealItems}</ul>
    </div>
  )
}

export default MealsList