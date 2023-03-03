const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.resolve(__dirname, 'public')))
// 接收json形式的请求体参数
app.use(express.json())
// 接收urlencoded形式的请求体参数
app.use(express.urlencoded({ extended: true }))

// 拦截所有请求
app.use((request, response, next) => {
    // 1.允许那些客户端访问我 *代表所有
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 2.允许客户端以哪种方式访问我
    // response.setHeader('Access-Control-Allow-Methods', 'get,post');
    response.setHeader('Access-Control-Allow-Headers', '*');
    next();
})

app.get('/query',(req, res) => {
  console.log(req.query);
  res.send({
    content: '啦啦啦啦啦'
  })
})

app.get('/params/:id',(req, res) => {
  const {id} = req.params
  const obj = {
    id,
    name: 'zs',
    age: 22
  }
  res.send(obj)
})

app.post('/post',(req, res) => {
  console.log(req.body);
  res.send({
    name: 'zs',
    age: 20
  })
})

// 错误路由
app.use((req,res) => {
  res.send('您访问的页面不存在！')
})

app.listen(3000, () => {
  console.log('3000端口服务器启动成功');
})