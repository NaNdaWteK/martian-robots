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
    const LINE_SIZE = 3
    const errors = []
    if (line.length > LINE_SIZE) errors.push('Mars input line is to big')
    if (line.length < LINE_SIZE) errors.push('Mars input line is to small')
    if (!Validations._isANumber(line[0]) || !Validations._isANumber(line[2])) {
      errors.push('Mars input types are not valid')
    }

    if (errors.length) {
      throw ValidationException('Some errors checking Mars input line', errors)
    }
    const verticalSize = parseInt(line[0])
    const horizontalSize = parseInt(line[2])

    return {
      verticalSize,
      horizontalSize
    }
  }

  static prepareRobotInputPositionLine (line) {
    const LINE_SIZE = 5
    const validOrientationDirections = ['N', 'S', 'E', 'W']
    const errors = []
    if (line.length > LINE_SIZE) errors.push('Robot input position line is to big')
    if (line.length < LINE_SIZE) errors.push('Robot input position line is to small')
    if (!Validations._isANumber(line[0]) || !Validations._isANumber(line[2])) {
      errors.push('Robot input position line types are not valid')
    }
    if (!validOrientationDirections.includes(line[4])) {
      errors.push('Robot input direction is incorrect')
    }
    if (errors.length) {
      throw ValidationException('Some errors checking Robots position input line', errors)
    }
    const xPosition = parseInt(line[0])
    const yPosition = parseInt(line[2])
    const orientation = line[4]

    return {
      xPosition,
      yPosition,
      orientation
    }
  }

  static _isANumber (value) {
    return value && !isNaN(parseInt(value))
  }
}

module.exports = Validations
