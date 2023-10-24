const path = require('path')
const fs = require('fs')

// 可写流
const filename = path.resolve(__dirname, '2.txt')
// 第二个参数为可选参数
/* {
  encoding: 编码方式
  flags: 'w' // 默认为'w'覆盖  'a'为追加
  start: 起始字节
  end: 结束字节
  highWaterMark: 每次写入数量(字节) // 一个汉字3个字节
  autoClose: true // 默认为true 文件读取完毕自动关闭
  
} */
const rs = fs.createWriteStream(filename, { flags: 'a', encoding: 'utf-8', highWaterMark: 3, autoClose: true })
rs.on('open', () => {
  console.log('可写流打开');
})
// 返回一个boolean 
// true: 写入通道没有被填满 截下来的数据可以直接写入，无需排队
// false: 写入通道没有目前已被填满 截下来的数据将进入写入队列
const flag = rs.write('ab')
const flag2 = rs.write('a')
console.log(flag, flag2);
rs.on('close', () => {
  console.log('可写流关闭');
})
rs.end()