// 1.导入http模块
const http = require('http');
// 2.创建web服务器实例
const server = http.createServer();
// 3.为服务器绑定request事件 监听客户端的请求
server.on('request', (req, res) => {
  console.log('有人访问我们的服务器');
  console.log('请求地址', req.url);
  console.log('请求方法', req.method);
  console.log('请求头', req.headers);

  let data = ''
  req.on('data', chunk => {
    data += chunk.toString('utf-8')
  })
  req.on('end', () => {
    console.log('请求体', data);
  })

  // 响应
  res.setHeader('a', 1)
  res.setHeader('b', 2)
  res.statusCode = 404
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.write('你好!')
  res.end()
})

// 启动服务器
server.listen(8080, () => {
  console.log('服务已启动');
})