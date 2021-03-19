const Mars = require('../domain/Mars')

describe('Mars', () => {
  test('known its coordinates sizes', () => {
    const inputLine = '5 3'

    const mars = new Mars(inputLine)

    expect(mars.verticalSize).toBe(5)
    expect(mars.horizontalSize).toBe(3)
  })
})
