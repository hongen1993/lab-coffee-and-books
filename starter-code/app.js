require("dotenv").config()

require("./db")

const express = require("express")

const hbs = require("hbs")

const app = express()

require("./config")(app)

const capitalize = require("./utils/capitalize")
const projectName = "starter-code"

app.locals.appTitle = `${capitalize(projectName)} created with IronLauncher`

const indexRoutes = require("./routes/index.routes")
app.use("/", indexRoutes)

const authRoutes = require("./routes/auth.routes")
app.use("/auth", authRoutes)

const placeRoutes = require('./routes/place.routes')
app.use('/places', placeRoutes)

require("./error-handling")(app)

module.exports = app
