const express = require('express')
const path = require('path')
const app = express()

const pathRoot = path.resolve(__dirname, '../public')

// app.use('/static',express.static(pathRoot))
app.use(express.static(pathRoot))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// 自己的urlencoded和json中间件
// app.use(require('./myUrlencodedAndJson'))


app.post('/api/student', (req, res) => {
  console.log(req.body);
  res.send('da')
})

app.use(require('./errorModdleware.js'))

// 启动服务器
app.listen(8080, () => {
  console.log('服务已启动');
})