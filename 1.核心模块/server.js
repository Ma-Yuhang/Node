const express = require('express')
const app = express()

app.get('/list', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  let list = []
  let num = 0
  for (let i = 0; i < 101; i++) {
    num++
    list.push({
      src: 'https://img1.baidu.com/it/u=337195790,3454436041&fm=253&fmt=auto&app=138&f=PNG?w=300&h=500',
      text: `我是${num}号嘉宾`,
      tid: num,
    })
  }
  res.send(list)
})
app.listen(2000, () => {
  console.log('http://127.0.0.1:2000')
})