// Creating an API using Express
const express = require("express")

const app = express()

// Dynamically set the port no
app.set('port', process.env.PORT || 3000)

var dataFile = require("../data/data.json")

app.use(require('./employees/welcome'))
app.use(require('./employees/employees'))

app.server = app.listen(app.get('port'))
console.log("Server started on port: " + app.get('port'))