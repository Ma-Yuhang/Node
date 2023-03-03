const fs = require('fs/promises')
const path = require('path')

;(async () => {
  try {
    // 若不写utf-8编码形式可以调用toString得到文本
    const data = await fs.readFile(path.resolve(__dirname, './file/file.txt'), 'utf-8')
    console.log(data);
  } catch (error) {
    console.log(error);
  }
})()


// 若不写utf-8编码形式可以调用toString得到文本
// fs.readFile(path.resolve(__dirname, '../file/file.txt'), 'utf-8').then(data => {
//   console.log(data);
// }).catch(err => {
//   console.log(err);
// })