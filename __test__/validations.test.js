const Validations = require('../domain/Validations')

describe('Validate', () => {
  test('prepare planet coordinates from input line', () => {
    const inputLine = '5 3'

    const { verticalSize, horizontalSize } = Validations.preparePlanetInputLine(inputLine)

    expect(verticalSize).toBe(5)
    expect(horizontalSize).toBe(3)
  })

  test('prepare robot position from input line', () => {
    const inputLine = '1 0 E'

    const { xPosition, yPosition, orientation } = Validations.prepareRobotInputPositionLine(inputLine)

    expect(xPosition).toBe(1)
    expect(yPosition).toBe(0)
    expect(orientation).toBe('E')
  })

  test('prepare robot movements', () => {
    const line = 'RFRFRFRF'

    const result = Validations.prepareRobotsMovement(line)

    expect(result.length).toBe(8)
  })

  test('known errors in input planet line', () => {
    const line = '5 X'

    try {
      Validations.preparePlanetInputLine(line)
    } catch (error) {
      expect(error.message).toBe('Some errors checking Planet input line')
      expect(error.status).toBe('KO')
      expect(error.errors[0]).toBe('Planet input types are not valid')
    }
  })
  test('known errors in input robots position line', () => {
    const line = '1 0 A '

    try {
      Validations.prepareRobotInputPositionLine(line)
    } catch (error) {
      expect(error.message).toBe('Some errors checking Robots position input line')
      expect(error.status).toBe('KO')
      expect(error.errors[0]).toBe('Robot input direction is incorrect')
    }
  })
  test('known errors if there are no valid robots movements in line', () => {
    const lineWithInvalidChars = 'LRA'

    try {
      Validations.prepareRobotsMovement(lineWithInvalidChars)
    } catch (error) {
      expect(error.message).toBe('Error in robot movements')
      expect(error.status).toBe('KO')
      expect(error.errors.length).toBe(1)
    }
    try {
      const lineWithSpaces = 'LR F'
      Validations.prepareRobotsMovement(lineWithSpaces)
    } catch (error) {
      expect(error.message).toBe('Error in robot movements')
      expect(error.status).toBe('KO')
      expect(error.errors.length).toBe(1)
    }
  })

  test('known if Planet coordinates exceed maximum', () => {
    const inputLine = '1 51'

    try {
      Validations.preparePlanetInputLine(inputLine)
    } catch (error) {
      expect(error.message).toBe('Some errors checking Planet input line')
      expect(error.status).toBe('KO')
      expect(error.errors[0]).toBe('Planet coordinates exceed the maximum')
    }
  })

  test('known if Robots coordinates exceed maximum', () => {
    const inputLine = '1 51 E'

    try {
      Validations.prepareRobotInputPositionLine(inputLine)
    } catch (error) {
      expect(error.message).toBe('Some errors checking Robots position input line')
      expect(error.status).toBe('KO')
      expect(error.errors[0]).toBe('Robot coordinates exceed the maximum')
    }
  })
})
