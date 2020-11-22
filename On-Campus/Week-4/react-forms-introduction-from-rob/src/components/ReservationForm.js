import React, { useState } from "react"
//Here the prop being pass from #25 in App/ The prop is our function App#12/The =>{ unpacks the prop so RexervationForm can read and use the function inside

const ReservationForm = props => {
  //State we will be saving to, firstName is what will be passed up
  const [firstName, setFirstName] = useState("")
  //The handleFirstNameChange function is used on #29 inside our input/it listens for a change, and onChange the function triggers/The function then uses the setter to make firstName equal to the input value upon EVERY change/See example at #36
  const handleFirstNameChange = event => {
    setFirstName(event.currentTarget.value)
  }
  //This function will fire upon an onSubmit event/It will prevent the form from refreshing and clearing data
  const handleSubmit = event => {
    event.preventDefault()

    //Update the value of our props.reserveLunchSpotForm with the value of our state, firstName
    props.reserveLunchSpotForm(firstName)

    //This will clear the form to allow for a new entry
    setFirstName("")
  }
//Here is the HTML code for the form that will be passed up to App to be rendered/ There are 3 pieces of info being passed up - 
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="first_name">Your First Name</label>
        <input
          id="first_name"
          type="text"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <input type="submit" value="RSVP" className="btn" />
      </div>
    </form>
  )
}
//This is what happens from the start
//value={firstName} >>> {firstName} = "" This is our default state
//User types the letter "D"
//The onChange event Occurs
//onChange={handleFirstNameChange} >>>> {handleFirstNameChange}="D"

//value={firstName} >>> {firstName} = "D"
//User types the letter "a"
//The onChange event Occurs
//onChange={handleFirstNameChange} >>>> {handleFirstNameChange}="Da"

//value={firstName} >>> {firstName} = "Da"
//User types the letter "n"
//The onChange event Occurs
//onChange={handleFirstNameChange} >>>> {handleFirstNameChange}="Dan"
export default ReservationForm