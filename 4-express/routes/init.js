const express = require('express')

const app = express()
app.get('/news', (req, res, next) => {
  console.log('1');
  // next(new Error('123'))
  next()
},
  // require('./errorModdleware.js') // 错误处理中间件
)
app.get('/news', (req, res) => {
  console.log('3');
  res.send('hhaaa')
})

app.use('/news', require('./errorModdleware.js'))
// 启动服务器
app.listen(8080, () => {
  console.log('服务已启动');
})