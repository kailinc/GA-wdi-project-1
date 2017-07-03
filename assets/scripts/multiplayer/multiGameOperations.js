'use strict'

const addSpot = function (location, mark) {
  $('#' + location).text(mark)
}

module.export = {
  addSpot
}
