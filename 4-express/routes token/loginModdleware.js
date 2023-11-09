// 判断是否登录的中间件
const { verify } = require('./jwt')
const needTokenApi = [
  { method: 'GET', path: '/api/student' },
  { method: 'GET', path: '/api/student/2' },
]

module.exports = function (req, res, next) {
  if (!needTokenApi.some(i => i.path === req.path && req.method === i.method)) {
    // 是不需要登录的
    next()
    return
  }
  const success = verify(req)
  if (success) {
    next()
  } else {
    res.status(403).send({
      msg: '没有登陆'
    })
  }
}