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
  Color = {
    GREEN: 'green',
    RED: 'red',
    BLUE: 'blue'
  }

  constructor(id, cubes) {
    this.id = id
    this.subSets = cubes
    this.isValid = this.isValidGame()
    this.minimumRedCubesSet = this.getMinimumCubesSet(this.Color.RED)
    this.minumunGreenCubesSet = this.getMinimumCubesSet(this.Color.GREEN)
    this.minimumBlueCubesSet = this.getMinimumCubesSet(this.Color.BLUE)
    this.powerMinimumCubesSet =
      this.minimumRedCubesSet *
      this.minumunGreenCubesSet *
      this.minimumBlueCubesSet
  }

  isValidGame() {
    const isSomeRedCubesOverLimit = this.subSets.some((cubes) =>
      cubes.some(
        (cube) =>
          cube.color === this.Color.RED && cube.number > this.redCubesLimit
      )
    )
    const isSomeGreenCubesOverLimit = this.subSets.some((cubes) =>
      cubes.some(
        (cube) =>
          cube.color === this.Color.GREEN && cube.number > this.greenCubesLimit
      )
    )
    const isSomeBlueCubesOverLimit = this.subSets.some((cubes) =>
      cubes.some(
        (cube) =>
          cube.color === this.Color.BLUE && cube.number > this.blueCubesLimit
      )
    )

    return (
      !isSomeRedCubesOverLimit &&
      !isSomeGreenCubesOverLimit &&
      !isSomeBlueCubesOverLimit
    )
  }

  getMinimumCubesSet(color) {
    let minGreenCubeNumber = 0

    this.subSets.forEach((cubes) => {
      cubes.forEach((cube) => {
        if (cube.color === color && cube.number > minGreenCubeNumber) {
          minGreenCubeNumber = cube.number
        }
      })
    })

    return minGreenCubeNumber
  }
}

class CubeConundrum {
  constructor(input) {
    this.input = input
    this.games = []
    this.validGamesIdsSum = 0
    this.minumunPowerSetsSum = 0
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

  getSumOfPowerSets() {
    return this.games.reduce((acc, curr) => acc + curr.powerMinimumCubesSet, 0)
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
    this.minumunPowerSetsSum = this.getSumOfPowerSets()
  }
}

function solution(input) {
  const cubeConundrum = new CubeConundrum(input)
  cubeConundrum.init()

  return cubeConundrum
}

module.exports = CubeConundrum
