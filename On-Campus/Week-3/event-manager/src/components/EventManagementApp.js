import React from "react"
import ReactDOM from "react-dom"

import EventTile from "./EventTile.js"

const EventManagementApp = props => {

  const events = ["Brunch with Werewolves", "Strategy Meeting with the Finfolk on New Import Tariffs", "Award Ceremony for Amrita the Banshee", "Djinn Tech Support with the Qamar and Caliope"]

  let eventOne = <li className="event">{events[0]}</li>
  let eventTwo = <li className="event">{events[1]}</li>
  let eventThree = <li className="event">{events[2]}</li>
  return (
    <div className="event-management-ap">
      <h1>Now viewing our upcoming events</h1>
      <ul className="event-tile"> 
        <EventTile title={props.title}/>
        <EventTile />
        <EventTile />
      </ul>
    </div>
  )
}

export default EventManagementApp;