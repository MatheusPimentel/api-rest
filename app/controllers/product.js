module.exports.search = function(application, req, res) {
  const aux = 'Hello World || pt-br -> ' + req.params.title
  const obj = {olaMundo: aux}
  res.send(obj)
}