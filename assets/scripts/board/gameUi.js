'use strict'

const store = require('../store')
const gameInfo = require('../gameInfo')

const createGameSuccess = function (data) {
  gameInfo.game = data
  // console.log(gameInfo.game)
}

const createGameError = function (error) {
  console.log(error)
}

const gameOverSuccess = function (data) {
  // console.log(gameInfo.name)
  // console.log(data)
  gameInfo.game = null
}

const gameOverError = function (error) {
  console.log(error)
}

const gameContinueSuccess = function (data) {
  console.log(data)
}
const gameContinueError = function (error) {
  console.log(error)
}

const checkWinSuccess = function (data) {
  console.log(data)
  console.log('ok')
}
const checkWinError = function (error) {
  console.log(error)
  console.log('try again buddy')
}
module.exports = {
  createGameSuccess,
  createGameError,
  gameOverSuccess,
  gameOverError,
  gameContinueError,
  gameContinueSuccess,
  checkWinError,
  checkWinSuccess
}
