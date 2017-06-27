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
module.exports = {
  onSignUpSuccess,
  onSignUpError,
  onSignInSuccess,
  onSignInError
}
