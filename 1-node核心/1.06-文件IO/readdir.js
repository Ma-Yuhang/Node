const path = require('path')
const fs = require('fs/promises')

// async function readFileInfo(filename) {
//   const dirname = path.resolve(__dirname, filename)
//   const res = await fs.stat(dirname)
//   return res.isFile()
// }

// 读取文件夹下的文件
const pathname = path.resolve(__dirname)
async function _readdir(pathname) {
  const fileArr = []
  const data = await fs.readdir(pathname)
  // console.log(data);
  for (const k of data) {
    let isFile = (await fs.stat(path.resolve(pathname, k))).isFile()
    if (isFile) {
      fileArr.push(k)
    } else {
      // const a  = _readdir(path.resolve(__dirname, k))
      // console.log(path.resolve(__dirname, k));
      fileArr.push(path.resolve(__dirname, k))
    }
  }
  // console.log(fileArr);
  return fileArr
}
_readdir(pathname).then(res => {
  console.log(res);
})




