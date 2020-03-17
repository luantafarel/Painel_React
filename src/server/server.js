require('dotenv').config()

const cors = require('cors')
const helmet = require('helmet')
const db = require('./db/mongo')
const routes = require('./routing')
const express = require('express')
const bodyParser = require('body-parser')

let app = express()
app.set('port', process.env.PORT || 5000)
// Middlewares
app.use(cors())
app.use(helmet())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

// Add routing
app.use(routes)

db.connect()
  .then(function () {
    let hostname = app.get('hostname'),
      port = app.get('port')

    app.listen(port, function () {
      console.log(`Express app listening on http://localhost:${port}/api`)
    })
  })
  .catch(function (error) {
    console.log(error)
  })

module.exports = app