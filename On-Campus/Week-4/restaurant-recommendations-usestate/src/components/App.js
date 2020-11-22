import React, { useState } from "react"
import ReviewForm from './ReviewForm'
import ReviewList from './ReviewList'
import Restaurant from "./Restaurant"
import reviews from "../constants/reviews"

const App = props => {
  
  const [reviewState, setReviewState] = useState(reviews)

  return (
    <div className="grid-container">
      <div className="grid-x">
        <div className="restaurants cell small-3">
          <h3>Restaurants</h3>
          <Restaurant />
        </div>

        <div className="reviews cell auto grid-x">
          <div className="cell">
            <h3>Review Form</h3>
            <ReviewForm />
          </div>

          <div className="cell">
            <h3>Reviews</h3>
            <ReviewList reviews={reviews} />
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
