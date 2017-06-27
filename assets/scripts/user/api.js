'use strict'

const app = require('../app.js')

const add = function (data) {
  return $.ajax({
    url: app.host + '/sign-up',
    method: 'POST',
    data
  })
}
const signIn = function (data) {
  console.log(data)
  return $.ajax({
    url: app.host + '/sign-in',
    method: 'POST',
    data
  })
}
module.exports = {
  add,
  signIn
}
