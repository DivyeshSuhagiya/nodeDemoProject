const { WHITE_LIST } = require('../config/constant')

var corsOptionsDelegate = function (req, callback) {
  var corsOptions = { origin: true, credentials: true }
  if (WHITE_LIST.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true, credentials: true }
  } else {
    corsOptions = { origin: false }
  }
  callback(null, corsOptions)
}

module.exports = corsOptionsDelegate
