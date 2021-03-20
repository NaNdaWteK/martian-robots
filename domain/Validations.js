const ValidationException = (message, errors)  => {
  return {
    message,
    errors,
    status: 'KO'
  }
}
ValidationException.prototype = Error.prototype

class Validations {
  static prepareMarsInputLine (line) {
    const MAX_LINE_SIZE = 5
    const MIN_LINE_SIZE = 3
    const errors = []
    const [upper, right] = line.split(' ')
    if (line.length > MAX_LINE_SIZE) errors.push('Mars input line is to big')
    if (line.length < MIN_LINE_SIZE) errors.push('Mars input line is to small')
    if (!Validations._isANumber(upper) || !Validations._isANumber(right)) {
      errors.push('Mars input types are not valid')
    }
    if (Validations._isCoordinateGreaterThanMaximum(upper) || Validations._isCoordinateGreaterThanMaximum(right)) {
      errors.push('Mars coordinates exceed the maximum')
    }
    if (errors.length) {
      throw ValidationException('Some errors checking Mars input line', errors)
    }
    const verticalSize = parseInt(upper)
    const horizontalSize = parseInt(right)

    return {
      verticalSize,
      horizontalSize
    }
  }

  static prepareRobotInputPositionLine (line) {
    const MAX_LINE_SIZE = 7
    const MIN_LINE_SIZE = 5
    const validOrientationDirections = ['N', 'S', 'E', 'W']
    const errors = []
    const [xCoordinate, yCoordinate, orientation ] = line.split(' ')
    if (line.length > MAX_LINE_SIZE) errors.push('Robot input position line is to big')
    if (line.length < MIN_LINE_SIZE) errors.push('Robot input position line is to small')
    if (!Validations._isANumber(xCoordinate) || !Validations._isANumber(yCoordinate)) {
      errors.push('Robot input position line types are not valid')
    }
    if (Validations._isCoordinateGreaterThanMaximum(xCoordinate) || Validations._isCoordinateGreaterThanMaximum(yCoordinate)) {
      errors.push('Robot coordinates exceed the maximum')
    }
    if (!validOrientationDirections.includes(orientation)) {
      errors.push('Robot input direction is incorrect')
    }
    if (errors.length) {
      throw ValidationException('Some errors checking Robots position input line', errors)
    }
    const xPosition = parseInt(xCoordinate)
    const yPosition = parseInt(yCoordinate)

    return {
      xPosition,
      yPosition,
      orientation
    }
  }

  static prepareRobotsMovement (line) {
    const errors = []
    const validMovements = ['L', 'R', 'F']
    if (line.includes(' ')) errors.push('Some movements are not valid')
    const result = line.split('')
    const resultValidation = result.filter(movement => validMovements.includes(movement))
    if (!errors.length && resultValidation.length !== result.length) {
      errors.push('Some movements are not valid')
    }
    if (errors.length) {
      throw ValidationException('Error in robot movements', errors)
    }

    return result
  }

  static _isANumber (value) {
    return value && !isNaN(parseInt(value))
  }

  static _isCoordinateGreaterThanMaximum (coordinate) {
    const MAXIMUM = 50

    return coordinate > MAXIMUM
  }
}

module.exports = Validations
