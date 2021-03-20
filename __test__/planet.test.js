const Planet = require('../domain/Planet')

describe('Planet', () => {
  test('known its coordinates sizes', () => {
    const verticalSize = 5
    const horizontalSize = 3

    const planet = new Planet(verticalSize, horizontalSize)

    expect(planet.verticalSize).toBe(3)
    expect(planet.horizontalSize).toBe(5)
  })
})
