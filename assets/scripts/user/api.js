'use strict'
const store = require('../store')

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

const changePwd = function (data) {
  console.log(data)
  console.log(store)
  return $.ajax({
    method: 'PATCH',
    url: app.host + '/change-password/' + store.user.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const logOut = function () {
  return $.ajax({
    url: app.host + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  add,
  signIn,
  changePwd,
  logOut
}
