let mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'
const dbName = 'project_learning'

let connMongoDB = function (dados) {
  mongo.connect(url, function (err, client) {
    console.log("Connected successfully to server")
    const db = client.db(dbName)
    query(db, dados)
    client.close()
  })
}

function query(db, data) {
  let collection = db.collection(data.collection);
  switch (data.operacao) {
      case "insert":
          collection.insertOne(data.users, data.callback)
          break
      default:
          break
  }
}

module.exports = function () {
  return connMongoDB
}