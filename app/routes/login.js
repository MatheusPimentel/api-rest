module.exports = function (application) {
  application.get('/olamundo', function (req, res) {
    let olaMundo = 'Teste de login!'
    res.send({olaMundo})
  })
  
  application.post('/register', function (req, res) {
    console.log(req)
  })
}