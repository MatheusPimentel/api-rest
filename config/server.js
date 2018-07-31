let express = require('express')
let app = express()
let consign = require('consign')
let cors = require('cors')

app.use(cors())

consign().include('app/routes')
  .then('app/controllers')
  .into(app)

module.exports = app