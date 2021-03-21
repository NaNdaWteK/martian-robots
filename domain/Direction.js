const North = require('./North')
const South = require('./South')
const East = require('./East')
const West = require('./West')

class Direction {
  static from (orientation) {
    const points = {
      N: North,
      S: South,
      E: East,
      W: West
    }
    return points[orientation]
  }
}

module.exports = Direction
