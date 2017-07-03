'use strict'

const multiOps = require('./multiGameOperations.js')
const gameApi = require('../board/gameApi.js')
const gameInfo = require('../gameInfo')
const multiUi = require('./multiUi.js')
const turns = require('./turns.js')

const x = 'x'

const totalMarkers = function () {
  gameApi.show(gameInfo.game.game.id)
    .then(multiUi.onTurnSuccess)
    .catch(multiUi.onTurnError)
}

const startGame = function () {
  $('#board li').off()
  totalMarkers()
  // if (totalMarkers() % 2 === 0 || totalMarkers() === 0) {
  //   $('#board li').on('click', addSpot)
  // }
}

const addSpot = function () {
  $(this).text(x).addClass(x)
}

module.exports = {
  startGame
}
