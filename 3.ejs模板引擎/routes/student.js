const express = require('express')
const path = require('path')
const fs = require('fs/promises')
const cookieParser = require('cookie-parser')
// 学生数据
const data = require('../data/students.json')
const router = express.Router()
router.use(cookieParser())
// 写入文件的函数
function writeFile(data,res) {
  fs.writeFile(path.resolve(__dirname, '../data/students.json'), JSON.stringify(data)).then(() => {
    console.log('操作成功');
  }).catch(() => {
    console.log('操作失败');
  })
    // 添加完之后重定向到students路由
    res.redirect('/students/list')
}
router.use((req,res,next) => {
  const {username} = req.session.userInfo || {}
  if(username === 'admin'){
    next()
  }else {
    res.redirect('/')
  }
})
router.get('/',(req,res) => {
  res.redirect('/students/list')
})
router.get('/list',(req,res) => {
  // 判断有无cookie
  // 安装解析cookie的中间件 cookie-parser
  // if(req.cookies.uname){
  // 渲染views目录下的students.ejs
  res.render('students',{stus: data})

})
// 表单提交的路由
router.post('/add',(req,res) => {
  const {name, age, sex} = req.body
  const id = data.at(-1) ? data.at(-1).id + 1 : 1
  const stuObj = {id, name, age, sex}
  data.push(stuObj)
  // 写入文件
  writeFile(data,res)
})

// 删除某个学生的路由
router.get('/delete/:id',(req, res) => {
  const {id} = req.params
  data.splice(data.findIndex(item => item.id == id),1)
  // 写入文件
  writeFile(data,res)
})

// 修改某个学生(去修改页面)
router.get('/to-update/:id',(req, res) => {
  const {id} = req.params
  const stuObj = data.find(item => item.id == id)
  res.render('update',{...stuObj})
})

// 修改某个学生(确认修改)
router.post('/update/:id',(req, res) => {
  
  const {id} = req.params
  const stuObj = Object.assign(req.body, {id})
  data.splice(data.findIndex(item => item.id == id),1,stuObj)
  // 写入文件
  writeFile(data,res)
})

module.exports = router