const express = require('express')
const path = require('path')
const fs = require('fs/promises')
// 学生数据
const data = require('./data/students.json')
const app = express()
// 将ejs设置为默认的模板引擎
app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'views'))
app.use(express.static(path.resolve(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))

// 写入文件的函数
function writeFile(data,res) {
  fs.writeFile(path.resolve(__dirname, './data/students.json'), JSON.stringify(data)).then(() => {
    console.log('操作成功');
  }).catch(() => {
    console.log('操作失败');
  })
    // 添加完之后重定向到students路由
    res.redirect('/students')
}

app.get('/students',(req,res) => {
  // 渲染views目录下的students.ejs
  res.render('students',{stus: data})
})
// 表单提交的路由
app.post('/add-students',(req,res) => {
  const {name, age, sex} = req.body
  const id = data.at(-1) ? data.at(-1).id + 1 : 1
  const stuObj = {id, name, age, sex}
  data.push(stuObj)
  // 写入文件
  writeFile(data,res)
})

// 删除某个学生的路由
app.get('/delete/:id',(req, res) => {
  const {id} = req.params
  data.splice(data.findIndex(item => item.id == id),1)
  // 写入文件
  writeFile(data,res)
})

// 修改某个学生(去修改页面)
app.get('/to-update/:id',(req, res) => {
  const {id} = req.params
  const stuObj = data.find(item => item.id == id)
  res.render('update',{...stuObj})
})

// 修改某个学生(确认修改)
app.post('/update/:id',(req, res) => {
  
  const {id} = req.params
  const stuObj = Object.assign(req.body, {id})
  data.splice(data.findIndex(item => item.id == id),1,stuObj)
  // 写入文件
  writeFile(data,res)
})

// 错误中间件
app.use((req, res) => {
  console.log('网页被妖怪抓走了');
  res.send('网页被妖怪抓走了')
})
app.listen('3000',() => {
  console.log("服务器启动了");
})

