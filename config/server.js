let express = require("express");
let bodyParser = require("body-parser");
let consign = require("consign");
let cors = require("cors");

let app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

consign()
  .include("app/routes")
  .then("app/controllers")
  .then("app/Utils")
  .into(app);

module.exports = app;
