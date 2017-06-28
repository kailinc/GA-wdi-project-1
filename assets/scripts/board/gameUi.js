'use strict'

const store = require('../store')
const gameInfo = require('../gameInfo')

const createGameSuccess = function (data) {
  gameInfo.game = data
}

const createGameError = function (error) {
  console.log(error)
  console.log('try again buddy')
}
module.exports = {
  createGameSuccess,
  createGameError
}
