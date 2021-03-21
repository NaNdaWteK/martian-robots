const { loadEnvVars } = require('../../utils/environment')
loadEnvVars()
const Explorer = require('../../domain/Explorer')
const InputTxtReader = require('../../domain/readers/InputTxtReader')
const MongoRepository = require('../../repository/mars/MongoRepository')

class MarsService {
  static explore (inputPath) {
    const inputTxtReader = new InputTxtReader(inputPath)

    const explorer = new Explorer(inputTxtReader)
    const result = explorer.execute()
    const document = MarsService._prepareDocument(result)

    return MongoRepository.addExplorationResult(document)
  }

  static _prepareDocument (result) {
    const document = { ...result }
    MarsService._removeScentFromRobots(document)
    MarsService._removePlanetFromRobots(document)
    document.planetName = 'Mars'

    return document
  }

  static _removeScentFromRobots (result) {
    result.robots.forEach(robot => {
      delete robot.scent
    })
  }

  static _removePlanetFromRobots (result) {
    result.robots.forEach(robot => {
      delete robot.planet
    })
  }
}

module.exports = MarsService
