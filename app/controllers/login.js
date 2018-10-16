let jwt = require("jsonwebtoken");
let bcrypt = require("bcryptjs");
let Crypto = require("../Utils/Crypto");
let User = require("../models/User");

//EXPLICAÇÃO MUITO BOA DE COMO USAR O JWT COM NODE
/**
 *https://medium.freecodecamp.org/securing-node-js-restful-apis-with-json-web-tokens-9f811a92bb52*/

// REGISTRO DE USUÁRIO
module.exports.register = function(application, req, res) {
  let user = new User(req.body);
  const password = Crypto.cryptoPassword(user.senha);
  user.senha = password;

  user.save(function(err, userResponse) {
    if (err) {
      return res.status(500).send(err);
    }
    createToken(userResponse, res);
    // res.send(userResponse);
  });
};

// LOGIN DE UM USUÁRIO
module.exports.login = function(application, req, res) {
  const email = req.params.email;
  const senha = req.params.senha;
  User.findOne({ email: email }, function(err, user) {
    if (err) {
      return res.status(500).send(err);
    }
    if (user === null) {
      return res.status(401).send({ message: "Usuário não encontrado" });
    }
    const password = Crypto.decryptPassword(user.senha);
    if (password === senha) {
      return createToken(user, res);
      // return res.send(user);
    }
    res.status(500).send({ message: "Usuário não encontrado" });
  });
};

// VERIFICAR TOKEN
module.exports.verifyToken = function(application, req, res) {
  let token = req.headers["x-acess-token"];
  if (!token) {
    return res.status(401).send({ auth: false, message: "No token provided." });
  }

  jwt.verify(token, "q1w2e3r4t5", function(err, decoded) {
    if (err)
      return res.status(500).send({
        auth: false,
        message: "Failed to authenticate token."
      });

    res.status(200).send(decoded);
  });
};

// HELLO WORLD
module.exports.olaMundo = function(application, req, res) {
  let olaMundo = "ola mundo!";
  res.send({ olaMundo });
};

function createToken(user, res) {
  // create a token
  var token = jwt.sign({ id: user._id }, "q1w2e3r4t5", {
    expiresIn: 86400 // expires in 24 hours
  });
  res.status(200).send({ auth: true, token: token });
}
