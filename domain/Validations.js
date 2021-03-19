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
    const VALID = true
    const errors = []
    if (line.length > 3) errors.push('Mars input line is to big')
    if (line.length < 3) errors.push('Mars input line is to small')
    if (!Validations._isANumber(line[0]) || !Validations._isANumber(line[2])) {
      errors.push('Mars input types is not valid')
    }

    if (errors.length) {
      throw ValidationException('Some errors checking Mars input line', errors)
    }

    return VALID
  }

  static _isANumber (value) {
    return value && !isNaN(parseInt(value))
  }
}

module.exports = Validations
