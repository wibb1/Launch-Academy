import React, { useState } from "react"
import LuncherList from "./LuncherList"
import ReservationForm from "./ReservationForm"

const defaultLunchers = ["Samantha", "Julie"]

const App = props => {
  //lunchers will default to what we have in #5
  const [lunchers, setLunchers] = useState(defaultLunchers)

//Here we create reserveLunchSpot function for it to be passed down to our form element ReservationForm.js on #24/This is how we will save user input submitted on our form element and save it to lunchers/ In ReservationForm on handleSubmit #10 the user submitted input gets added to reserveLunchSpotForm/ The {handleSubmit} the gets returned to App.js where the user submitted input takes the place of name/Finally it gets concat'd to our lunchers object
  const reserveLunchSpot = name => {
    setLunchers(lunchers.concat(name))
  }

//#20-23 will pass down the data in our lunchers state - in return - LuncherList will pass up info to be displayed by App. in this case <ul> from #12 on LuncherList
//#24-26 will pass down the function we created on #12 - in return - ReservationForm will pass up a <form> from #21-32 to be displayed by App
  return (
    <div>
      <h1>Twistagram Company Update Lunch</h1>
      <LuncherList 
        lunchers={lunchers} 
      />
      <ReservationForm 
        reserveLunchSpotForm={reserveLunchSpot} 
      />
    </div>
  )
}

export default App