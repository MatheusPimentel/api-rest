let mongoose = require("mongoose");
let constantes = require("../app/Utils/constantes");
mongoose.connect(
  constantes.MONGO_DB_URL,
  { useNewUrlParser: true }
);
module.exports = mongoose;
