const solutionPartOne = require('./index')
// const solutionPartTwo = require('./index')

const fs = require('fs')

const mockInput = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`

const text1 = fs.readFileSync('./01_input.txt', 'utf8').replaceAll('\r', '')

test('First line should return a valid Game', () => {
  const result = solutionPartOne(mockInput).games[0].isValid
  const expected = true

  expect(result).toBe(expected)
})
test('Second line should return a valid Game', () => {
  const result = solutionPartOne(mockInput).games[1].isValid
  const expected = true
  expect(result).toBe(expected)
})
test('Third line should return an invalid Game', () => {
  const result = solutionPartOne(mockInput).games[2].isValid
  const expected = false

  expect(result).toBe(expected)
})
test('Fourth line should return an invalid Game', () => {
  const result = solutionPartOne(mockInput).games[3].isValid
  const expected = false

  expect(result).toBe(expected)
})
test('Fifth line should return an invalid Game', () => {
  const result = solutionPartOne(mockInput).games[4].isValid
  const expected = true

  expect(result).toBe(expected)
})
test('Custom Test', () => {
  const input =
    'Game 24: 1 red, 13 green, 4 blue; 16 green, 4 blue; 4 red, 5 blue, 11 green; 15 green, 5 red, 10 blue; 16 green, 1 red; 5 red, 3 blue, 10 green'
  const result = solutionPartOne(input).games[0].isValid

  console.log('result: ', solutionPartOne(text1).validGamesIdsSum)
  const expected = false

  expect(result).toBe(expected)
})
