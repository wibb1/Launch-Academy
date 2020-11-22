import React, { useState } from "react"
import LuncherList from "./LuncherList"
import ReservationForm from "./ReservationForm"

const defaultLunchers = ["Samantha", "Julie"]

const App = props => {
  const [lunchers, setLunchers] = useState(defaultLunchers)

  const reserveLunchspot = name => {
    setLunchers(lunchers.concat(name))
  }

  return (
    <div>
      <h1>Twistagram Company Update Lunch</h1>
      <LuncherList lunchers={lunchers} />
      <ReservationForm onNameSubmitted={reserveLunchspot} />
    </div>
  )
}

export default App