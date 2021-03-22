const path = require('path')
const MarsService = require('../services/mars/MarsService')

class Explore {
  static async invoke () {
    const inputPath = path.join(__dirname, '../utils/input.txt')
    const saveLostRobotsStrategy = 'scent'

    return MarsService.explore(inputPath, saveLostRobotsStrategy)
  }
}

module.exports = Explore
