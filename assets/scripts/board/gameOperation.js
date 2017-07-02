'use strict'
const gameApi = require('./gameApi.js')
const gameUi = require('./gameUi.js')
const boardEvents = require('./boardEvents.js')

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

// let boardArray = ['', '', '', '', '', '', '', '', '']

const gameOperation = function (turns) {
  $('#board li').on('click', addSpot)
  localTurns = turns
}

const addSpot = function () {
  const spot = $(this)
  if (spot.text() === '-' && localTurns % 2 === 0) {
    spot.text(x).addClass('x')
    localTurns += 1
    // makeArray()
    if (checkWinTie(x) === true) {
      const index = $(this).attr('id') - 1
      gameApi.update(index, x, true)
        .then(gameUi.gameOverSuccess)
        .catch(gameUi.gameOverError)
      if (checkWin(x) === true) {
        updateHeadline(x)
        $('#board li').text(x)
        addWin(x)
        // boardArray = ['', '', '', '', '', '', '', '', '']
      } else {
        $('#board li').text('=)')
      }
    } else {
      const index = $(this).attr('id') - 1
      gameApi.update(index, x, false)
        .then(gameUi.gameContinueSuccess)
        .catch(gameUi.gameContinueError)
    }
  } else if (spot.text() === '-' && localTurns % 2 === 1) {
    spot.text(o).addClass('o')
    localTurns += 1
    // makeArray()
    if (checkWinTie(o) === true) {
      const index = $(this).attr('id') - 1
      gameApi.update(index, o, true)
        .then(gameUi.gameOverSuccess)
        .catch(gameUi.gameOverError)
      if (checkWin(o) === true) {
        updateHeadline(o)
        $('#board li').text(o)
        addWin(o)
        // boardArray = ['', '', '', '', '', '', '', '', '']
      } else {
        $('#board li').text('=)')
      }
    } else {
      const index = $(this).attr('id') - 1
      gameApi.update(index, o, false)
        .then(gameUi.gameContinueSuccess)
        .catch(gameUi.gameContinueError)
    }
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

const checkWin = function (player) {
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
  } else {
    return false
  }
}

const addWin = function (player) {
  let win = parseInt($('#' + player).text())
  win += 1
  $('#' + player).text(win)
}

// const makeArray = function () {
//   $('#board li').each(function (index) {
//     boardArray[index] = $('#' + (index + 1)).text()
//   })
// }

const updateHeadline = function (player) {
  $('#gameResult').text('Player ' + player.toUpperCase() + ' wins this time!')
}
module.exports = {
  gameOperation
}
