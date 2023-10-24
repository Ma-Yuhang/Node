const path = require('path')
const fs = require('fs')

// 可读流
const filename = path.resolve(__dirname, '1.txt')
// 第二个参数为可选参数
/* {
  encoding: 编码方式
  start: 起始字节
  end: 结束字节
  // 如果encoding是null highWaterMark: 1 => 每次读取一个字节
  // 如果encoding是utf-8 highWaterMark: 1 => 每次读取一个字符
  highWaterMark: 每次读取数量
  autoClose: true // 默认为true 文件读取完毕自动关闭
  
} */
const rs = fs.createReadStream(filename, { encoding: 'utf-8', highWaterMark: 2, autoClose: true })
rs.on('open', () => {
  console.log('文件打开了');
})
rs.on('data', (chunk) => {
  console.log('读取了一部分' + chunk);
  rs.pause() // 暂停
})
rs.on('pause', () => {
  // console.log('暂停了');
  setTimeout(() => {
    rs.resume() // 恢复
  }, 1000)
})
// rs.on('resume', () => {
//   console.log('恢复了')
// })
rs.on('end', () => {
  console.log('文件读取完毕');
})
rs.on('close', () => {
  console.log('文件关闭了');
})
rs.on('error', () => {
  console.log('出错了!!');
})