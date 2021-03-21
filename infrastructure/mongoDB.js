const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

let _db = null

const connection = () => {
  return MongoClient.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(client => {
      _db = client.db()
      return _db
    })
}

const getDB = () => {
  if (_db) {
    return _db
  } else {
    return connection()
  }
}

exports.getDB = () => {
  return getDB()
}
