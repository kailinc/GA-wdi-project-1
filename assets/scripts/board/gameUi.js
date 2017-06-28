'use strict'

const store = require('../store')
const gameInfo = require('../gameInfo')

const createGameSuccess = function (data) {
  gameInfo.game = data
  // console.log(gameInfo.game)
}

const createGameError = function (error) {
  console.log(error)
  console.log('try again buddy')
}

const gameOverSuccess = function (data) {
  console.log(data)
  gameInfo.game = null
  console.log('good job')
  console.log(gameInfo.game)
}

const gameOverError = function (error) {
  console.log(error)
  console.log('try again buddy')
}

const gameContinueSuccess = function (data) {
  console.log(data)
  console.log('ok')
}
const gameContinueError = function (error) {
  console.log(error)
  console.log('try again byddy!')
}
module.exports = {
  createGameSuccess,
  createGameError,
  gameOverSuccess,
  gameOverError,
  gameContinueError,
  gameContinueSuccess
}
