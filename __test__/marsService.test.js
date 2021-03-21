const { loadEnvVars } = require('../utils/environment')
loadEnvVars()
const path = require('path')
const inputPath = path.join(__dirname, './testSupport/input.txt')
const MarsService = require('../services/mars/MarsService')

describe('MarsService', () => {
  test('can be explored', async () => {
    let movements = ["R", "F", "R", "F", "R", "F", "R", "F"]

    const result = await MarsService.explore(inputPath)

    expect(result.planetName).toBe('Mars')
    expect(result.planet.horizontalSize).toBe(5)
    expect(result.planet.verticalSize).toBe(3)
    expect(result.planet.lostRobots.length).toBe(1)
    expect(result.robots[0].movements).toMatchObject(movements)
    expect(result.robots[0].xPosition).toBe(1)
    expect(result.robots[0].yPosition).toBe(1)
    expect(result.robots[0].orientation).toBe('E')
    expect(result.robots[0].lost).toBe(false)
    movements = ["F", "R", "R", "F", "L", "L", "F", "F", "R", "R", "F", "L", "L"]
    expect(result.robots[1].movements).toMatchObject(movements)
    expect(result.robots[1].xPosition).toBe(3)
    expect(result.robots[1].yPosition).toBe(3)
    expect(result.robots[1].orientation).toBe('N')
    expect(result.robots[1].lost).toBe(true)
    movements = ["L", "L", "F", "F", "F", "L", "F", "L", "F", "L"]
    expect(result.robots[2].movements).toMatchObject(movements)
    expect(result.robots[2].xPosition).toBe(2)
    expect(result.robots[2].yPosition).toBe(3)
    expect(result.robots[2].orientation).toBe('S')
    expect(result.robots[2].lost).toBe(false)
  })
})
