import React from "react"
import ReactDOM from "react-dom"

import styles from "./stylesheets/app.css"
import data from "./constants/data"

import App from "./components/App"


ReactDOM.render(
  <App data={data} />,
  document.getElementById("app")
)
