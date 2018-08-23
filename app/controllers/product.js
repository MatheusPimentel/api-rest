let Product = require('../models/Product')

module.exports.insert = function(application, req, res) {
  const produto = req.body
  let product = new Product(produto)
  product.save(function(err, userResponse) {
    if(err) {
      return res.status(500).send(err)
    }
    res.send(userResponse)
  })
}

module.exports.search = function(application, req, res) {
}