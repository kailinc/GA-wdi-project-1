'use strict'

const multiOps = require('./multiGameOperations.js')

const x = 'x'
const startGame = function () {
  $('#board li').off()
  $('#board li').on('click', addSpot)
}

const addSpot = function () {
  $(this).text(x).addClass(x)
}

module.exports = {
  startGame
}
