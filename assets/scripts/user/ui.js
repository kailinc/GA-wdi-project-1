'use strict'
const store = require('../store')
const boardEvents = require('../board/boardEvents.js')

const onSignUpSuccess = function () {
  $('.signUp input').css('background-color', '#228a11')
}
const onSignUpError = function () {
  $('.signUp input').css('background-color', 'red')
}
const onSignInSuccess = function (data) {
  store.user = data.user
  $('.signIn input').css('background-color', '#228a11')
  $('.userOut').css('display', 'block')
  $('.userIn').css('display', 'none')
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
  $('#board li').removeClass('disable').removeClass('x').removeClass('o').text(' ')
  $('.userForms input').css('background-color', 'white')
  $('.userOut').css('display', 'none')
  $('.userIn').css('display', 'block')
  $('#gameResult').text('Tic Tac Toe')
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
