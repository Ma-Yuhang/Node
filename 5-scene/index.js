const express = require('express')
const app = express()
const path = require('path')
const uploadRouter = require('./routes/upload')
const downloadRouter = require('./routes/download')
app.use(express.static(path.resolve(__dirname, './public')))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// app.use(require('./moddleware/imgProtected'))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('access-control-allow-origin', '*')
  next() 
})
app.use('/api/upload', uploadRouter)
app.use('/api/download', downloadRouter)



app.listen(5500, () => {
  console.log('5500端口服务已启动');
})