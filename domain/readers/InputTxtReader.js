const splitInputIntoLines = require('../../utils/splitInputIntoLines')

class InputTxtReader {
  constructor (path) {
    this.path = path
  }

  read () {
    const lines = splitInputIntoLines(this.path)

    const planetLine = lines.shift()
    const robotsLines = this._prepareRobots(lines)

    return {
      planetLine,
      robotsLines
    }
  }

  _prepareRobots (lines) {
    const robots = []
    const linesToPrepare = [...lines]
    lines.forEach(() => {
      if (linesToPrepare.length > 1) {
        const robot = {
          position: linesToPrepare.shift(),
          movements: linesToPrepare.shift()
        }
        robots.push(robot)
      }
    })

    return robots
  }
}
module.exports = InputTxtReader
