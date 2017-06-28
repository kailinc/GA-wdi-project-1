'use strict'

const store = require('../store')
const app = require('../app.js')
const gameInfo = require('../gameInfo')

const create = function () {
  console.log(store)
  return $.ajax({
    url: app.host + '/games',
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
    url: app.host + '/games/' + gameInfo.game.game.id,
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

module.exports = {
  create,
  update
}
