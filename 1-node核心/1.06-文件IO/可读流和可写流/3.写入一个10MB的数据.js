const path = require('path')
const fs = require('fs')

const ws = fs.createWriteStream(path.resolve(__dirname, '3.txt'), {
  highWaterMark: 16 * 1024
})

ws.on('open', () => {
  console.log('可写流打开');
})
// 会有严重的背压问题
// for (let i = 0; i < 1024*1024*10; i++) {
//   ws.write('a')
// }

let i = 0
function write() {
  let flag = true
  while (i < 1024 * 1024 * 10 && flag) {
    flag = ws.write('a')
    i++
  }
}
write()
// 当写入队列清空会触发drain事件(也就是当前边的全部写入之后再去写)
ws.on('drain', () => {
  write()
})
