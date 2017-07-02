'use strict'

const gameApi = require('./gameApi.js')
const gameUi = require('./gameUi.js')
const gameReg = require('./gameOperation.js')
const statsInfo = require('../statsInfo.js')
const gameInfo = require('../gameInfo')

const onStartGame = function (e) {
  e.preventDefault()
  boardReady()
  gameApi.create()
    .then(gameUi.createGameSuccess)
    .catch(gameUi.createGameError)
  // prevent game from ending, game must continue until tie or wins
  gameReg.gameOperation(0)
}

const onCheckStats = function (e) {
  e.preventDefault()
  gameApi.index()
    .then(gameUi.checkStatsSuccess)
    .catch(gameUi.checkStatsError)
}

const boardReady = function () {
  // gets the board ready for clearing disable, x, o (class + text)
  $('#board li').removeClass('disable').removeClass('x').removeClass('o').text('-')
}

const onJoinGame = function (event) {
  event.preventDefault()
  let gameId = $('#info').val()
  gameApi.joinGame(gameId)
    .then(gameUi.joinGameSuccess)
    .catch(gameUi.joinGameError)
}

const onCheckBoard = function (event) {
  event.preventDefault()
  alert('ok')
}

const onCheckJoin = function () {
  event.preventDefault()
  gameApi.show(gameInfo.game.game.id)
    .then(gameUi.checkGameSuccess)
    .catch(gameUi.checkGameError)
  if (gameInfo.game.game.player_o) {
    $('#message').text('You are playing against ' + gameInfo.game.game.player_o.email)
  } else {
    $('#message').text('Waiting for players')
  }
}

module.exports = {
  onStartGame,
  onCheckStats,
  onJoinGame,
  boardReady,
  onCheckBoard,
  onCheckJoin
}
