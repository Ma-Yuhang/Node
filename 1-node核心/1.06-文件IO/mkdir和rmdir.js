const fs = require('fs/promises')
const path = require('path')

// 创建一个hello文件夹
// fs.mkdir(path.resolve(__dirname, './hello')).then(() => {
//   console.log('追加目录成功');
// })

// 创建一个hello2目录下的abc目录 
// 第二个参数是一个配置对象
// recursive默认值为false 设置为true会进行递归创建
// fs.mkdir(path.resolve(__dirname, './hello2/abc'),{recursive: true}).then(() => {
//   console.log('追加目录成功');
// }).catch(err => {
//   console.log(err);
// })

// 删除hello文件夹
// 第二个参数是一个配置对象
// recursive默认值为false 设置为true会进行递归删除
// fs.rmdir(path.resolve(__dirname, 'hello2')).then(() => {
//   console.log('删除目录成功');
// })
// 删除文件
fs.unlink(path.resolve(__dirname, 'test.txt')).then(() => {
  console.log('删除文件成功');
})