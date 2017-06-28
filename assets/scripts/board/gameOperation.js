'use strict'
let localTurns = 0
const x = 'x'
const o = 'o'

// variables for spots
const spot1 = $('#1')
const spot2 = $('#2')
const spot3 = $('#3')
const spot4 = $('#4')
const spot5 = $('#5')
const spot6 = $('#6')
const spot7 = $('#7')
const spot8 = $('#8')
const spot9 = $('#9')

const gameOperation = function (turns) {
  $('#board li').on('click', addSpot)
  localTurns = turns
}

const addSpot = function () {
  const spot = $(this)
  if (spot.text() === '-' && localTurns % 2 === 0) {
    spot.text(x).addClass('x')
    localTurns += 1
    if (checkWinTie(x) === true) {
      console.log('We have a winner')
      // game over = true
    } else {
      console.log('We don\'t')
      // game over = false
    }
    // checkWin(x)
    // updateboard AJAX

    // checkWin(x);
  } else if (spot.text() === '-' && localTurns % 2 === 1) {
    spot.text(o).addClass('o')
    localTurns += 1
    if (checkWinTie(o) === true) {
      console.log('we have a winner')
    } else {
      console.log('We don\'t')
    }

    // checkWin(o);
  } else {
    console.log('This spot is marked! Please Choose another Spot!')
  }
}

const checkWinTie = function (player) {
  if (spot1.hasClass(player) && spot2.hasClass(player) && spot3.hasClass(player) ||
  spot4.hasClass(player) && spot5.hasClass(player) && spot6.hasClass(player) ||
  spot7.hasClass(player) && spot8.hasClass(player) && spot9.hasClass(player) ||
  spot1.hasClass(player) && spot4.hasClass(player) && spot7.hasClass(player) ||
  spot2.hasClass(player) && spot5.hasClass(player) && spot8.hasClass(player) ||
  spot3.hasClass(player) && spot6.hasClass(player) && spot9.hasClass(player) ||
  spot1.hasClass(player) && spot5.hasClass(player) && spot9.hasClass(player) ||
  spot3.hasClass(player) && spot5.hasClass(player) && spot7.hasClass(player)
) {
    return true
  } else if (localTurns === 9) {
    return true
  } else {
    return false
  }
}

module.exports = {
  gameOperation
}
