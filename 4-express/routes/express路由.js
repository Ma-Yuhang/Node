const express = require('express')
const path = require('path')
const app = express()

const pathRoot = path.resolve(__dirname, '../public')

app.use(express.static(pathRoot))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


const studentRouter = express.Router()
// app.post('/api/student', (req, res) => {
//   console.log(req.body);
//   res.send('da')
// })

// 得到所有学生
studentRouter.get('/', (req, res) => {
  res.send('所有学生')
})
// 得到某一个学生
studentRouter.get('/:id', (req, res) => {
  res.send('得到某一个学生')
})
// 修改学生信息
studentRouter.put('/:id', (req, res) => {
  console.log(req.body);
  res.send(req.body)
})
// 添加一个学生
studentRouter.post('/', (req, res) => {
  res.send(`添加一个学生,学生信息为${req.body}`)
})
// 删除一个学生
studentRouter.delete('/:id', (req, res) => {
  res.send(`删除id为${req.params.id}的学生`)
})
app.use('/api/student', studentRouter)

app.use(require('./errorModdleware.js'))

// 启动服务器
app.listen(8080, () => {
  console.log('服务已启动');
})