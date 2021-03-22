const path = require('path')
const inputPath = path.join(__dirname, './testSupport/input.txt')
const InputTxtReader = require('../domain/readers/InputTxtReader')
const Explorer = require('../domain/Explorer')

describe.skip('Explorer', () => {
  test('can explore planet with robots', () => {
    const inputTxtReader = new InputTxtReader(inputPath)
    const lostStrategy = 'scent'
    const explorer = new Explorer(inputTxtReader, lostStrategy)
    explorer.execute()

    expect(explorer.planet.horizontalSize).toBe(5)
    expect(explorer.planet.verticalSize).toBe(3)
    expect(explorer.robots[0].xPosition).toBe(1)
    expect(explorer.robots[0].yPosition).toBe(1)
    expect(explorer.robots[0].orientation).toBe('E')
    expect(explorer.robots[0].lost).toBe(false)
    expect(explorer.robots[1].xPosition).toBe(3)
    expect(explorer.robots[1].yPosition).toBe(3)
    expect(explorer.robots[1].orientation).toBe('N')
    expect(explorer.robots[1].lost).toBe(true)
    expect(explorer.robots[2].xPosition).toBe(2)
    expect(explorer.robots[2].yPosition).toBe(3)
    expect(explorer.robots[2].orientation).toBe('S')
    expect(explorer.robots[2].lost).toBe(false)
  })
})
