'use strict'

const onSignUpSuccess = function () {
  console.log('ok')
}
const onSignUpError = function () {
  console.log('try again buddy!')
}
module.exports = {
  onSignUpSuccess,
  onSignUpError
}
