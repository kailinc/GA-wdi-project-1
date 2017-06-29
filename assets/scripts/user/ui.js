'use strict'
const store = require('../store')

const onSignUpSuccess = function () {
  $('.signUp input').css('background-color', '#228a11')
}
const onSignUpError = function () {
  $('.signUp input').css('background-color', 'red')
}
const onSignInSuccess = function (data) {
  store.user = data.user
  $('.signIn input').css('background-color', '#228a11')
}
const onSignInError = function () {
  $('.signIn input').css('background-color', 'red')
}

const onChangeSuccess = function () {
  $('.changePassword input').css('background-color', '#228a11')
}
const onChangeError = function () {
  $('.changePassword input').css('background-color', 'red')
}

const onLogOutSuccess = function () {
  // console.log('logged out')
  store.user = null
  $('.userForms input').css('background-color', 'white').val('')
}

const onLogOutError = function () {
  // console.log(error)
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
