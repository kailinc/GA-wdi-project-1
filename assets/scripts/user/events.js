'use strict'

const userApi = require('./api.js')
const userUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  userApi.add(data)
    .then(userUi.onSignUpSuccess)
    .catch(userUi.onSignUpError)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('onSignIn')
  console.log(data)
  userApi.signIn(data)
    .then(userUi.onSignInSuccess)
    .catch(userUi.onSignInError)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  userApi.changePwd(data)
    .then(userUi.onChangeSuccess)
    .catch(userUi.onChangeError)
}

const onLogOut = function (event) {
  event.preventDefault()
  userApi.logOut()
    .then(userUi.onLogOutSuccess)
    .catch(userUi.onLogOutError)
}
module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onLogOut
}
