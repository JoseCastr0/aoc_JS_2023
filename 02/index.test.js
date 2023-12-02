const solutionPartOne = require('./index')
const CubeConundrum = require('./index')
// const solutionPartTwo = require('./index')

const fs = require('fs')

const mockInput = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`

const textInput = fs.readFileSync('./01_input.txt', 'utf8').replaceAll('\r', '')

describe('-- PART ONE --', () => {
  const cubeConundrumMock = new CubeConundrum(mockInput)
  cubeConundrumMock.init()
  test('First line should return a valid Game', () => {
    const result = cubeConundrumMock.games[0].isValid
    const expected = true

    expect(result).toBe(expected)
  })
  test('Second line should return a valid Game', () => {
    const result = cubeConundrumMock.games[1].isValid
    const expected = true
    expect(result).toBe(expected)
  })
  test('Third line should return an invalid Game', () => {
    const result = cubeConundrumMock.games[2].isValid
    const expected = false

    expect(result).toBe(expected)
  })
  test('Fourth line should return an invalid Game', () => {
    const result = cubeConundrumMock.games[3].isValid
    const expected = false

    expect(result).toBe(expected)
  })
  test('Fifth line should return an invalid Game', () => {
    const result = cubeConundrumMock.games[4].isValid
    const expected = true

    expect(result).toBe(expected)
  })
  test('SOLUTION PART 1 -----', () => {
    const cubeConundrum = new CubeConundrum(textInput)
    cubeConundrum.init()
    const result = cubeConundrum.validGamesIdsSum
    console.log('SOLUTION PART 1: ', cubeConundrum.validGamesIdsSum)

    expect(result).toBe(1867)
  })
})
describe('-- PART TWO --', () => {
  const cubeConundrum = new CubeConundrum(mockInput)
  cubeConundrum.init()
  test('First Game should return 2 green cubes', () => {
    const result = cubeConundrum.games[0].minumunGreenCubesSet
    const expected = 2

    expect(result).toBe(expected)
  })
  test('Game 1 should return 4 red cubes, 2 green cubes and 6 blue cubes', () => {
    const redCubes = cubeConundrum.games[0].minimumRedCubesSet
    const blueCubes = cubeConundrum.games[0].minimumBlueCubesSet
    const greenCubes = cubeConundrum.games[0].minumunGreenCubesSet

    expect(redCubes).toBe(4)
    expect(blueCubes).toBe(6)
    expect(greenCubes).toBe(2)
  })
  test('Game 1 should return 48 for the power of minimum cubes set', () => {
    const result = cubeConundrum.games[0].powerMinimumCubesSet

    expect(result).toBe(48)
  })
  test('Game 2 should return 12 for the power of minimum cubes set', () => {
    const result = cubeConundrum.games[1].powerMinimumCubesSet

    expect(result).toBe(12)
  })
  test('Game 3 should return 1560 for the power of minimum cubes set', () => {
    const result = cubeConundrum.games[2].powerMinimumCubesSet

    expect(result).toBe(1560)
  })
  test('Game 4 should return 630 for the power of minimum cubes set', () => {
    const result = cubeConundrum.games[3].powerMinimumCubesSet

    expect(result).toBe(630)
  })
  test('Game 5 should return 36 for the power of minimum cubes set', () => {
    const result = cubeConundrum.games[4].powerMinimumCubesSet

    expect(result).toBe(36)
  })
  test('The sum of the power of the mock sets should be 2286', () => {
    const result = cubeConundrum.games[4].powerMinimumCubesSet

    expect(result).toBe(36)
  })
  test('SOLUTION PART 2 -----', () => {
    const cubeConundrum = new CubeConundrum(textInput)
    cubeConundrum.init()
    const result = cubeConundrum.minumunPowerSetsSum
    console.log('SOLUTION PART 2: ', result)

    expect(result).toBe(84538)
  })
})
