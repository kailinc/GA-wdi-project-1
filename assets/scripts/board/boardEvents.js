'use strict'

const gameApi = require('./gameApi.js')
const gameUi = require('./gameUi.js')
const getFormFields = require('../../../lib/get-form-fields')
const gameReg = require('./gameOperation.js')

const onStartGame = function (e) {
  e.preventDefault()
  boardReady()
  gameApi.create()
    .then(gameUi.createGameSuccess)
    .catch(gameUi.createGameError)
  // prevent game from ending, game must continue until tie or wins
  $('#playBtn').off()
  $('#playBtn').on('click', function (e) { e.preventDefault() })
  gameReg.gameOperation(0)
}

const boardReady = function () {
  // gets the board ready for clearing disable, x, o (class + text)
  $('#board li').removeClass('disable').removeClass('x').removeClass('o').text('-')
}

module.exports = {
  onStartGame
}
