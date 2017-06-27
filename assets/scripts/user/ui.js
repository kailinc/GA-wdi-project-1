'use strict'
const store = require('../store')

const onSignUpSuccess = function () {
  console.log('ok')
}
const onSignUpError = function () {
  console.log('try again buddy!')
}
const onSignInSuccess = function (data) {
  store.user = data.user
  console.log(store)
  console.log('ok')
}
const onSignInError = function () {
  console.log('try again buddy!')
}

const onChangeSuccess = function () {
  console.log('password changed')
}
const onChangeError = function (error) {
  console.log(error)
}

const onLogOutSuccess = function () {
  console.log('logged out')
  store.user = null
}

const onLogOutError = function (error) {
  console.log(error)
}

module.exports = {
  onSignUpSuccess,
  onSignUpError,
  onSignInSuccess,
  onSignInError,
  onLogOutSuccess,
  onLogOutError,
  onChangeSuccess,
  onChangeError
}
