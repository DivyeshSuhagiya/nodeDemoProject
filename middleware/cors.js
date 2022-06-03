const { WHITE_LIST } = require('../config/constant')

var corsOptionsDelegate = function (req, callback) {
  var corsOptions = { origin: "https://node-demo-first.herokuapp.com/", credentials: true }
  if (WHITE_LIST.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: "https://node-demo-first.herokuapp.com/", credentials: true }
  } else {
    corsOptions = { origin: "https://node-demo-first.herokuapp.com/" }
  }
  callback(null, corsOptions)
}

module.exports = corsOptionsDelegate
