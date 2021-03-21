const Direction = require('./Direction')
const Scent = require('../domain/Scent')

class Robot {
  constructor (movements, planet) {
    this.movements = movements
    this.planet = planet
    this.lost = false
  }

  move () {
    for (const movement of this.movements) {
      if (movement !== 'F') {
        this._rotateRobot(movement)
      } else {
        this._moveForward()
      }
      if (this.lost) break
    }
  }

  startScentScenario () {
    this.scent = new Scent(this.planet)
  }

  setPosition (xPosition, yPosition, orientation) {
    this.setOrientation(orientation)
    this.setXPosition(xPosition)
    this.setYPosition(yPosition)
  }

  setOrientation (orientation) {
    this.orientation = orientation
  }

  setXPosition (xPosition) {
    this.xPosition = xPosition
  }

  setYPosition (yPosition) {
    this.yPosition = yPosition
  }

  _rotateRobot (movement) {
    this.orientation = Direction.from(this.orientation).rotateTo(movement)
  }

  _moveForward () {
    if (this.orientation === 'N') {
      this._moveToNorth()
    } else if (this.orientation === 'S') {
      this._moveToSouth()
    } else if (this.orientation === 'E') {
      this._moveToEast()
    } else if (this.orientation === 'W') {
      this._moveToWest()
    }
  }

  _moveToWest () {
    const position = this.xPosition - 1
    if (this._isLostOnXAxis(position)) {
      return this._setLostRobot()
    }
    this._updateXPosition(position)
  }

  _moveToEast () {
    const position = this.xPosition + 1
    if (this._isLostOnXAxis(position)) {
      return this._setLostRobot()
    }
    this._updateXPosition(position)
  }

  _moveToSouth () {
    const position = this.yPosition - 1
    if (this._isLostOnYAxis(position)) {
      return this._setLostRobot()
    }
    this._updateYPosition(position)
  }

  _moveToNorth () {
    const position = this.yPosition + 1
    if (this._isLostOnYAxis(position)) {
      return this._setLostRobot()
    }
    this._updateYPosition(position)
  }

  _setLostRobot () {
    this.planet.lostRobot(this.xPosition, this.yPosition)
    this.lost = true
  }

  _isLostOnXAxis (position, planet) {
    return this._goesOutOnHorizontalAxis(position, planet) &&
      this._willBeLostOnXAxis(planet)
  }

  _willBeLostOnXAxis () {
    return !this.scent.hasLostRobotScent(this.xPosition, this.yPosition) &&
      this.scent.wantToBeOutOnPlanetXAxis(this.xPosition)
  }

  _goesOutOnHorizontalAxis (position) {
    return position > this.planet.horizontalSize || position < 0
  }

  _isLostOnYAxis (position) {
    return this._goesOutOnVerticalAxis(position) &&
      this._willBeLostOnYAxis()
  }

  _goesOutOnVerticalAxis (position) {
    return position > this.planet.verticalSize || position < 0
  }

  _willBeLostOnYAxis () {
    return !this.scent.hasLostRobotScent(this.xPosition, this.yPosition) &&
      this.scent.wantToBeOutOnPlanetYAxis(this.yPosition)
  }

  _updateXPosition (position) {
    if ((!this.scent.hasLostRobotScent(this.xPosition, this.yPosition)) ||
      (this.scent.hasLostRobotScent(this.xPosition, this.yPosition) &&
        !this.scent.wantToBeOutOnPlanetXAxis(this.xPosition))
    ) {
      this.xPosition = position
    }
  }

  _updateYPosition (position) {
    if ((!this.scent.hasLostRobotScent(this.xPosition, this.yPosition)) ||
      (this.scent.hasLostRobotScent(this.xPosition, this.yPosition) &&
        !this.scent.wantToBeOutOnPlanetYAxis(this.yPosition))
    ) {
      this.yPosition = position
    }
  }
}

module.exports = Robot
