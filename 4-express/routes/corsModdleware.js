const allowOrigins = [
  'http://127.0.0.1:5500',
]

module.exports = function (req, res, next) {
  // 处理预检请求
  if (req.method === 'OPTIONS') {
    console.log('这是一个预检请求');
    res.header('Access-Control-Allow-Methods', req.headers['access-control-request-method']);
    res.header('Access-Control-Allow-Headers', req.headers['access-control-request-headers']);
  }
  res.header('Access-Control-Allow-Credentials', true)
  if ('origin' in req.headers && allowOrigins.includes(req.headers['origin'])) {
    res.header('access-control-allow-origin', req.headers['origin'])
  }
  next()
}