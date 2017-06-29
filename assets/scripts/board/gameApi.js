'use strict'

const store = require('../store')
const config = require('../config.js')
const gameInfo = require('../gameInfo')

const create = function () {
  // console.log(store)
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: ''
  })
}

const update = function (position, player, status) {
  // console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/games/' + gameInfo.game.game.id,
    method: 'PATCH',
    contentType: 'application/json',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: JSON.stringify({
      game: {
        cell: {
          index: position,
          value: player
        },
        over: status
      }
    })
  })
}

const index = function () {
  return $.ajax({
    url: config.apiOrigin + '/games?over=true',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  create,
  update,
  index
}
