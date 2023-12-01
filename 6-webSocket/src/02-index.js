const express = require("express");
const app = express();
const { createServer } = require("http");
const server = createServer(app);
const io = require("socket.io")(server);
const path = require('path')


app.use(express.static(path.resolve(__dirname, '../public'),{index: '02-index.html'}))

io.on("connection", (socket) => {
  console.log('新的客户端连接了');
  socket.on('msg', chunk => {
    console.log(chunk.toString('utf-8'));
  })
  const timer = setInterval(() => {
    io.emit('test', 'test message from server')
  },2000)

  socket.on('disconnect', () => {
    clearInterval(timer)
    console.log('浏览器断开');
  })
});

server.listen(3000, () => {
  console.log('开启');
});