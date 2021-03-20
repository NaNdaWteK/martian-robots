const Validations = require('../domain/Validations')

describe('Validate', () => {
  test('known errors in input mars line', () => {
    const line = '5 X '

    try {
      Validations.checkMarsInputLine(line)
    } catch (error) {
      expect(error.message).toBe('Some errors checking Mars input line')
      expect(error.status).toBe('KO')
      expect(error.errors.length).toBe(2)
    }
  })
  test('known errors in input robots position line', () => {
    const line = '1 0 A '

    try {
      Validations.checkRobotInputPositionLine(line)
    } catch (error) {
      expect(error.message).toBe('Some errors checking Robots position input line')
      expect(error.status).toBe('KO')
      expect(error.errors.length).toBe(2)
    }
  })
})
