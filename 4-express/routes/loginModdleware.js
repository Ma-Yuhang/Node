// 判断是否登录的中间件

const notTokenApi = [
  { method: 'POST', path: '/api/login' },
  { method: 'OPTIONS', path: '/api/login' },
  // { method: 'GET', path: '/api/student' },
  { method: 'OPTIONS', path: '/api/student' }
]

module.exports = function (req, res, next) {
  if(notTokenApi.some(i => i.path === req.path && req.method === i.method)) {
    // 是不需要登录的
    next()
    return
  }
  let token = req.cookies.token
  if (!token) {
    token = req.headers['authorization']
  }
  if (!token) {
    // 没有登录
    res.status(403).send({msg: '没有登陆'})
    console.log('认证不通过');
    return
  }
  // 验证token是否正确
  console.log('认证通过');
  next()
}