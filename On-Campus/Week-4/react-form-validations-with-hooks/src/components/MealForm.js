import React, { useState } from "react"

const meals = ["breakfast", "lunch", "dinner", "snack"]
const MealForm = props => {
  const [mealRecord, setMealRecord] = useState({
    food: "",
    meal: "",
    description: ""
  })

  const mealOptions = [""].concat(meals).map(meal => {
    return (
      <option key={meal} value={meal}>
        {meal}
      </option>
    )
  })

  const clearForm = event => {
    event.preventDefault()
    setMealRecord({
      food: "",
      meal: "",
      description: ""
    })
  }

  const handleInputChange = event => {
    setMealRecord({
      ...mealRecord,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const onSubmitHandler = event => {
    event.preventDefault()
    props.onMealSubmitted(mealRecord)
  }

  return (
    <form className="callout" onSubmit={onSubmitHandler}>
      <label>
        I ate:
        <input
          type="text"
          id="food"
          onChange={handleInputChange}
          value={mealRecord.food}
        />
      </label>

      <label>
        Meal:
        <select id="meal" onChange={handleInputChange} value={mealRecord.meal}>
          {mealOptions}
        </select>
      </label>

      <label>
        Description:
        <textarea
          id="description"
          onChange={handleInputChange}
          value={mealRecord.description}
        />
      </label>

      <div className="button-group">
        <button className="button" onClick={clearForm}>
          Clear
        </button>
        <input className="button" type="submit" value="Submit" />
      </div>
    </form>
  )
}

export default MealForm
