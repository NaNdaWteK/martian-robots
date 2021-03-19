const Validations = require('../domain/Validations')

describe('Validate', () => {
  test('known correct input mars line', () => {
    const line = '5 3'

    const result = Validations.checkMarsInputLine(line)

    expect(result).toBe(true)
  })

  test('known errors in input mars line', () => {
    const line = '5 X '

    try {
      const result = Validations.checkMarsInputLine(line)
    } catch (error) {
      expect(error.message).toBe('Some errors checking Mars input line')
      expect(error.status).toBe('KO')
      expect(error.errors.length).toBe(2)
    }
  })
})
