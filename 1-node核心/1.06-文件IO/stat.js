const path = require('path')
const fs = require('fs/promises')

// 获取文件或目录信息
fs.stat(path.resolve(__dirname, 'write.txt')).then(data => {
  console.log(data);
})