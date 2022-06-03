const { WHITE_LIST } = require('../config/constant')

var corsOptionsDelegate = function (req, callback) {
  var corsOptions = { origin: "*", credentials: true }
  if (WHITE_LIST.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: "*", credentials: true }
  } else {
    corsOptions = { origin: "*" }
  }
  callback(null, corsOptions)
}

module.exports = corsOptionsDelegate
