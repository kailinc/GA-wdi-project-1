'use strict'
let localTurns = 0
const x = 'x'
const o = 'o'

const gameOperation = function (turns) {
  $('#board li').on('click', addSpot)
  localTurns = turns
}

const addSpot = function () {
  const spot = $(this)
  if (spot.text() === '-' && localTurns % 2 === 0) {
    spot.text(x).addClass('x')
    localTurns += 1
    // checkWin(x);
  } else if (spot.text() === '-' && localTurns % 2 === 1) {
    spot.text(o).addClass('o')
    localTurns += 1
    // checkWin(o);
  } else {
    alert('This spot is marked! Please Choose another Spot!')
  }
}

module.exports = {
  gameOperation
}
