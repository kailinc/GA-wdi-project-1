'use strict'

const store = require('../store')
const gameInfo = require('../gameInfo')
const statsInfo = require('../statsInfo.js')

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

const checkStatsSuccess = function (data) {
  statsInfo.history = data.games
  updateStats(statsInfo.history)
  // console.log(data)
  // console.log(statsInfo)
}

const checkStatsError = function (error) {
  console.log(error)
}

const updateStats = function (data) {
  let wins = 0
  let totalGames = data.length
  let loses = 0
  let winPercent = 0
  console.log(data)
  if (totalGames !== 0) {
    for (let i = 0; i < data.length; i++) {
      if (checkWin(data[i].cells) === true) {
        wins += 1
      }
    }
    console.log(wins)
    console.log(totalGames)
    // console.log('json')
  } else {
    console.log(' else 0')
  }
  // console.log(data[0])
}

const checkWin = function (array) {
  if (checkX(array[0]) && checkX(array[1]) && checkX(array[2])) {
    return true
  } else if (checkX(array[3]) && checkX(array[4]) && checkX(array[5])) {
    return true
  } else if (checkX(array[6]) && checkX(array[7]) && checkX(array[8])) {
    return true
  } else if (checkX(array[0]) && checkX(array[3]) && checkX(array[6])) {
    return true
  } else if (checkX(array[1]) && checkX(array[4]) && checkX(array[7])) {
    return true
  } else if (checkX(array[2]) && checkX(array[5]) && checkX(array[8])) {
    return true
  } else if (checkX(array[0]) && checkX(array[4]) && checkX(array[8])) {
    return true
  } else if (checkX(array[2]) && checkX(array[4]) && checkX(array[6])) {
    return true
  } else {
    return false
  }
}

const checkX = function (string) {
  return string === 'x'
}
module.exports = {
  createGameSuccess,
  createGameError,
  gameOverSuccess,
  gameOverError,
  gameContinueError,
  gameContinueSuccess,
  checkStatsError,
  checkStatsSuccess
}
