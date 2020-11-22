import "./main.scss"
import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import data from "./constants/data"

ReactDOM.render(
  // note currently this only passes down the first faq
  <App data={data}/>,
  document.getElementById("app")
)
