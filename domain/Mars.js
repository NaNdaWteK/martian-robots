const Validations = require('./Validations')

class Mars {
  constructor (inputLine) {
    this._valid(inputLine)
    this.verticalSize = parseInt(inputLine[0])
    this.horizontalSize = parseInt(inputLine[2])
  }

  _valid (line) {
    Validations.checkMarsInputLine(line)
  }
}

module.exports = Mars
