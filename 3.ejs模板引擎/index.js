const express = require('express')
const path = require('path')
const app = express()
const session = require('express-session')

// 将ejs设置为默认的模板引擎
app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'views'))
app.use(express.static(path.resolve(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(session({
  secret: 'haha',
  resave: false, //添加 resave 选项 
  saveUninitialized: true
}))
// 学生模块的router 访问学生相关的 /students/list
app.use('/students',require('./routes/student'))
// 教师模块的router
app.use('/teachers',require('./routes/teacher'))


app.get('/',(req, res) => {
  res.render('login')
})

app.post('/login',(req, res) => {
  const {username, password} = req.body
  if(username === 'admin' && password === '123456'){
    // res.cookie('uname', username, {
    //   maxAge: 1000 * 60 * 60 * 24 * 30 //设置cookie的有效期为1个月
    // })
    // res.cookie('uname', username) // 默认有效期是一个会话
    // 将用户信息存放到session中
    req.session.userInfo = {username}
    res.redirect('/students/list')
  }else {
    res.send('登录失败')
  }
})

// 错误中间件
app.use((req, res) => {
  res.send('网页被妖怪抓走了')
})
app.listen('3000',() => {
  console.log("服务器启动了");
})
