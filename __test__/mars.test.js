const Mars = require('../domain/Mars')

describe('Mars', () => {
  test('known its coordinates sizes', () => {
    const verticalSize = 5
    const horizontalSize = 3

    const mars = new Mars(verticalSize, horizontalSize)

    expect(mars.verticalSize).toBe(5)
    expect(mars.horizontalSize).toBe(3)
  })
})
