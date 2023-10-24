const fs = require('fs/promises')
const path = require('path')

// 参数一：文件要存放的路径
// 参数二：要写入的内容
// 参数三：传入的配置对象（可选）
//  encoding:设置文件的编码格式 默认utf8
//  mode: 0o666(默认) 文件可被读写
//      0o111 文件可执行
//      0o222 文件只可写入 不可读
//      0o444 文件只可读取 不可写入
//  flag: 默认 'w' 替换文件内容
//             'a' 追加文件内容
// 参数四：回调函数

fs.writeFile(path.resolve(__dirname, './write.txt'), '重写',).then(() => {
  console.log('文件追加完成');
})
// 第一种方式追加文件内容
// 若没有文件，则自动创建文件并写入内容
// fs.writeFile(path.resolve(__dirname, './write.txt'), '追加上的', { flag: 'a' }).then(() => {
//   console.log('文件追加完成');
// })
// 第二种方式追加文件内容
// fs.appendFile(path.resolve(__dirname, './file/111.txt'), 'appendFile追加上的').then(() => {
//   console.log('文件追加完成');
// })