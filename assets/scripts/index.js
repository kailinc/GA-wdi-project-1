'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const userEvents = require('./user/events.js')
const boardEvents = require('./board/boardEvents.js')

$(() => {
  $('.signUp').on('submit', userEvents.onSignUp)
  $('.signIn').on('submit', userEvents.onSignIn)
  $('.changePassword').on('submit', userEvents.onChangePassword)
  $('.logOut').on('click', userEvents.onLogOut)
  $('#playBtn').on('click', boardEvents.onStartGame)
  $('.totalWins').on('submit', boardEvents.onCheckWins)
})
