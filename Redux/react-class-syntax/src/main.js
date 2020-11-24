import React from "react"
import ReactDOM from "react-dom"

import "./main.scss"
import Message from "./components/Message"

ReactDOM.render(
  <Message message="Welcome to my React Application!" />,
  document.getElementById("app")
)
