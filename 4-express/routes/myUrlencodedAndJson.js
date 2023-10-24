const qs = require('querystring')

module.exports = (req, res, next) => {
  if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
    let result = ''
    req.on('data', chunk => {
      result += chunk.toString('utf-8')
    })
    req.on('end', () => {
      const query = qs.parse(result)
      req.body = query
      next()
    })
  } else if (req.headers['content-type'] === 'application/json') {
    let result = ''
    req.on('data', chunk => {
      result += chunk.toString('utf-8')
    })
    req.on('end', () => {
      req.body = JSON.parse(result)
      next()
    })
  } else {
    next()
  }
}