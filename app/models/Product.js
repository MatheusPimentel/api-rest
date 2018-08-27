let mongoose = require('../../config/mongoConnection')
let Schema = mongoose.Schema

let productSchema = new Schema({
  idUser: {type: String},
  titulo: {type: String},
  descricao: {type: String},
  valor: {type: Number}
})

let Products = mongoose.model('products', productSchema)
module.exports = Products
