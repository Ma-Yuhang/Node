const fs = require('fs')
const path = require('path')


fs.readFile(path.resolve(__dirname, './file/file.txt'), 'utf-8', (err,data) => {
  if(err) {
    console.log('读取文件失败');
  }
  console.log(data);
})