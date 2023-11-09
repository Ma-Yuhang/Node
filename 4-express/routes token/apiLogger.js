const {apiLogger }  = require('../logger')

module.exports = function(req, res, next) {
  next()
  apiLogger.debug(`${req.method} ${req.baseUrl}${req.path} ${req.ip}`)
}