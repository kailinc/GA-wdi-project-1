'use strict'

const store = require('../store')
const app = require('../app.js')

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

module.exports = {
  create
}
