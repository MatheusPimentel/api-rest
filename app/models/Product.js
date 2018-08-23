let mongoose = require('../../config/mongoConnection')
let Schema = mongoose.Schema

let userSchema = new Schema({
  idUser: {type: ObjectId},
  titulo: {type: String},
  descricao: {type: String},
  valor: {type: Number}
})

let User = mongoose.model('products', userSchema)
module.exports = User