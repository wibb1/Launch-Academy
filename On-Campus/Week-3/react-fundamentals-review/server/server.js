const express = require("express")
const path = require("path")
const fs = require("fs")
const logger = require("morgan")
const bodyParser = require("body-parser")

const app = express()

app.use(logger("dev"))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "../public")))

const hbsMiddleware = require("express-handlebars")
app.set("views", path.join(__dirname, "../views"))
app.engine(
  "hbs",
  hbsMiddleware({
    extname: ".hbs"
  })
)
app.set("view engine", "hbs")

app.get("/", (req, res) => {
  res.render("index")
})

app.listen(3000, "0.0.0.0", () => {
  console.log("Server is listening...")
})

module.exports = app
