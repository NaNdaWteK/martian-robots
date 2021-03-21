const getDB = require('../../infrastructure/mongoDB').getDB

class MongoRepository {
  static async addExplorationResult (document) {
    const db = await getDB()
    return db.collection('Explorations')
      .insertOne(document)
      .then(result => result.ops[0])
  }
}

module.exports = MongoRepository
