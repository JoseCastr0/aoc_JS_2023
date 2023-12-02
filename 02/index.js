class Cube {
  constructor(number, color) {
    this.number = number
    this.color = color
  }
}

class Game {
  redCubesLimit = 12
  greenCubesLimit = 13
  blueCubesLimit = 14

  constructor(id, cubes) {
    this.id = id
    this.subSets = cubes
    this.isValid = this.isValidGame()
  }

  isValidGame() {
    const isSomeRedCubesOverLimit = this.subSets.some((cubes) =>
      cubes.some(
        (cube) => cube.color === 'red' && cube.number > this.redCubesLimit
      )
    )
    const isSomeGreenCubesOverLimit = this.subSets.some((cubes) =>
      cubes.some(
        (cube) => cube.color === 'green' && cube.number > this.greenCubesLimit
      )
    )
    const isSomeBlueCubesOverLimit = this.subSets.some((cubes) =>
      cubes.some(
        (cube) => cube.color === 'blue' && cube.number > this.blueCubesLimit
      )
    )

    return (
      !isSomeRedCubesOverLimit &&
      !isSomeGreenCubesOverLimit &&
      !isSomeBlueCubesOverLimit
    )
  }
}

class CubeConundrum {
  constructor(input) {
    this.input = input
    this.games = []
    this.validGamesIdsSum = 0
  }

  convertLineIntoGame(inputLine) {
    const [gameIdString, cubeDataString] = inputLine.split(': ')
    const gameId = Number(gameIdString.replace('Game ', ''))
    const cubeStrings = cubeDataString.split('; ')
    const subSets = cubeStrings.map((cubeString) => {
      const cubeDataStrings = cubeString.split(', ')
      return cubeDataStrings.map((cubeDataString) => {
        const [numberString, color] = cubeDataString.split(' ')
        const number = Number(numberString)
        return new Cube(number, color)
      })
    })

    return new Game(gameId, subSets)
  }

  init() {
    const lines = this.input.split('\n')
    this.games = lines.map((line) => this.convertLineIntoGame(line))
    this.validGamesIdsSum =
      this.games.length === 1
        ? this.games[0].id
        : this.games
            .filter((game) => game.isValid)
            .map((game) => game.id)
            .reduce((acc, curr) => acc + curr)
  }
}

function solutionPartOne(input) {
  const cubeConundrum = new CubeConundrum(input)
  cubeConundrum.init()

  return cubeConundrum
}

module.exports = solutionPartOne
// module.exports = solutionPartTwo
