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
  console.log(req.session,'dadad');
  next()
}