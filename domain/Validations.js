const ValidationException = (message, errors)  => {
  return {
    message,
    errors,
    status: 'KO'
  }
}
ValidationException.prototype = Error.prototype

class Validations {
  static checkMarsInputLine (line) {
    const LINE_SIZE = 3
    const VALID = true
    const errors = []
    if (line.length > LINE_SIZE) errors.push('Mars input line is to big')
    if (line.length < LINE_SIZE) errors.push('Mars input line is to small')
    if (!Validations._isANumber(line[0]) || !Validations._isANumber(line[2])) {
      errors.push('Mars input types are not valid')
    }

    if (errors.length) {
      throw ValidationException('Some errors checking Mars input line', errors)
    }

    return VALID
  }

  static checkRobotInputPositionLine (line) {
    const LINE_SIZE = 5
    const VALID = true
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

    return VALID
  }

  static _isANumber (value) {
    return value && !isNaN(parseInt(value))
  }
}

module.exports = Validations
