import "./main.scss"
import React from "react"
import ReactDOM from "react-dom"
import TwitterFeed from "./containers/TwitterFeed"
import data from "./constants/data"

ReactDOM.render(<TwitterFeed data={data} />, document.getElementById("app"))
