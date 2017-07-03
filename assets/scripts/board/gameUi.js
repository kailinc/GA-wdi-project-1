'use strict'

const store = require('../store')
const gameInfo = require('../gameInfo')
const statsInfo = require('../statsInfo.js')
const boardEvents = require('./boardEvents.js')
const multi = require('./multi.js')

const createGameSuccess = function (data) {
  gameInfo.game = data
  $('#gameId').text('Game Id: ' + gameInfo['game']['game']['id'])
  if (!gameInfo['game']['game']['player_o']) {
    $('#message').text('Waiting for player to join')
  }
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
  // console.log(data)
}
const gameContinueError = function () {
  // console.log(error)
}

const checkStatsSuccess = function (data) {
  statsInfo.history = data.games
  updateStats(statsInfo.history)
  // console.log(data)
  // console.log(statsInfo)
}

const checkStatsError = function (error) {
  console.log(error)
  boardEvents.boardReady()
}

const joinGameSuccess = function (data) {
  multi.game = data.game
  console.log(multi['game'])
  $('#message').text('You are playing ' + data['game']['player_x']['email'])
}
const joinGameError = function (error) {
  console.log(error)
}

const updateStats = function (data) {
  let wins = 0
  let totalGames = data.length
  let loses = 0
  let winPercent = 0
  // console.log(data)
  if (totalGames !== 0) {
    for (let i = 0; i < data.length; i++) {
      if (checkWin(data[i].cells, 'x') === true) {
        wins += 1
      }
      if (checkWin(data[i].cells, 'o') === true) {
        loses += 1
      }
      winPercent = Math.round((wins / totalGames) * 100)
    }
  }
  $('#wins').text('Player 1 won ' + wins + ' games.')
  $('#loses').text('Player 1 lost ' + loses + ' games.')
  $('#games').text('Player 1 played ' + totalGames + ' games.')
  $('#winPercent').text('Player 1 won ' + winPercent + '% of user\'s games.')
}

const checkWin = function (array, marker) {
  if (array[0] === array[1] && array[1] === array[2] && array[2] === marker) {
    return true
  } else if (array[3] === array[4] && array[4] === array[5] && array[5] === marker) {
    return true
  } else if (array[6] === array[7] && array[7] === array[8] && array[8] === marker) {
    return true
  } else if (array[0] === array[3] && array[3] === array[6] && array[6] === marker) {
    return true
  } else if (array[1] === array[4] && array[4] === array[7] && array[7] === marker) {
    return true
  } else if (array[2] === array[5] && array[5] === array[8] && array[8] === marker) {
    return true
  } else if (array[0] === array[4] && array[4] === array[8] && array[8] === marker) {
    return true
  } else if (array[2] === array[4] && array[4] === array[6] && array[6] === marker) {
    return true
  } else {
    return false
  }
}

const checkGameSuccess = function (data) {
  gameInfo.game = data
}

const checkGameError = function (error) {
  console.log(error)
}
module.exports = {
  createGameSuccess,
  createGameError,
  gameOverSuccess,
  gameOverError,
  gameContinueError,
  gameContinueSuccess,
  checkStatsError,
  checkStatsSuccess,
  checkWin,
  joinGameSuccess,
  joinGameError,
  checkGameSuccess,
  checkGameError
}
