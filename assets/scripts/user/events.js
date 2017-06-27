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
module.exports = {
  onSignUp
}
