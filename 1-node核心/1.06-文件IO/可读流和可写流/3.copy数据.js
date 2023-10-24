const path = require('path')
const fs = require('fs')


// 1.不使用流(占用很大内存)
// async function method1() {
//   const from = path.resolve(__dirname, '3.txt')
//   const to = path.resolve(__dirname, '3.copy.txt')
//   console.time('写入时间')
//   const content = await fs.promises.readFile(from)
//   await fs.promises.writeFile(to, content)
//   console.timeEnd('写入时间');
// }
// method1()

// 2.使用流
async function method2() {
  const from = path.resolve(__dirname, '3.txt')
  const to = path.resolve(__dirname, '3.copy.txt')
  console.time('方式二')
  const rs = fs.createReadStream(from)
  const ws = fs.createWriteStream(to)
  // rs.on('data', (chunk) => {
  //   let flag = ws.write(chunk)
  //   if (!flag) {
  //     // 表示下一次写入会造成背压
  //     rs.pause() // 暂停
  //   }
  // })
  // ws.on('drain', () => {
  //   // 可以继续写了
  //   rs.resume() // 恢复
  // })
  
  // 上面代码可直接写成pipe方法
  rs.pipe(ws) // 将可读流连接到可写流 可解决背压问题
  rs.on('close', () => {
    // 读完了
    ws.end()
    console.timeEnd('方式二')
  })
}
method2()