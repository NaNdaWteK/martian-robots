const Validations = require('../domain/Validations')

describe('Validate', () => {
  test('prepare mars coordinates from input line', () => {
    const inputLine = '5 3'

    const { verticalSize, horizontalSize } = Validations.prepareMarsInputLine(inputLine)

    expect(verticalSize).toBe(5)
    expect(horizontalSize).toBe(3)
  })

  test('prepare rotob position from input line', () => {
    const inputLine = '1 0 E'

    const { xPosition, yPosition, orientation } = Validations.prepareRobotInputPositionLine(inputLine)

    expect(xPosition).toBe(1)
    expect(yPosition).toBe(0)
    expect(orientation).toBe('E')
  })

  test('known errors in input mars line', () => {
    const line = '5 X '

    try {
      Validations.prepareMarsInputLine(line)
    } catch (error) {
      expect(error.message).toBe('Some errors checking Mars input line')
      expect(error.status).toBe('KO')
      expect(error.errors.length).toBe(2)
    }
  })
  test('known errors in input robots position line', () => {
    const line = '1 0 A '

    try {
      Validations.prepareRobotInputPositionLine(line)
    } catch (error) {
      expect(error.message).toBe('Some errors checking Robots position input line')
      expect(error.status).toBe('KO')
      expect(error.errors.length).toBe(2)
    }
  })
})
