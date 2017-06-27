'use strict'

const app = require('../app.js')

const add = function (data) {
  return $.ajax({
    url: app.host + '/sign-up',
    method: 'POST',
    data
  })
}
module.exports = {
  add
}
