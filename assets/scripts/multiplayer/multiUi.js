'use strict'
const turns = require('./turns.js')

const onTurnSuccess = function (data) {
  const cells = data.game.cells
  let total = 0
  for (let i = 0; i < cells.length; i++) {
    if (cells[i] === 'x' || cells[i] === 'o') {
      total += 1
    }
  }
  turns.data = total
  console.log(turns.data)
}

const onTurnError = function (error) {
  console.log(error)
}

module.exports = {
  onTurnSuccess,
  onTurnError
}
