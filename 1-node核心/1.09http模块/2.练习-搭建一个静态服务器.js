const http = require('http')
const URL = require('url')
const path = require('path')
const fs = require('fs/promises')
const server = http.createServer()

// 判断文件存不存在
async function getStat(filename) {
  try {
    return await fs.stat(filename)
  } catch (err) {
    return null
  }
}
// 得到要处理的文件信息
async function getFileInfo(url) {
  const urlObj = URL.parse(url)
  console.log(url);
  console.log(urlObj);
  let filename = path.resolve(__dirname, 'public', urlObj.pathname.slice(1))
  console.log(filename);
  let stat = await getStat(filename)
  if (!stat) {
    // 如果文件不存在
    return null
  } else if (stat.isDirectory()) {
    filename = path.resolve(__dirname, 'public', urlObj.pathname.slice(1), 'index.html')
    // 判断文件下边是否有index.html页面
    stat = await getStat(filename)
    if (!stat) {
      return null
    } else {
      return await fs.readFile(filename)
    }
  } else {
    return await fs.readFile(filename)
  }
}
server.on('request', async (req, res) => {
  const content = await getFileInfo(req.url)
  if (!content) {
    res.statusCode = 404
    res.write('Not Found')
  } else {
    res.write(content)
  }
  res.end()
})

server.listen(9527, () => {
  console.log('9527服务器启动');
})