const net = require('net')

const socket = net.createConnection({
  host: "duyi.ke.qq.com",
  port: 80
}, () => {
  console.log('连接成功');
})
const response = {}
function convert(str) {
  const index = str.indexOf('\r\n\r\n')
  // console.log(index);
  const header = str.substring(0, index)
  const body = str.substring(index + 1)
  const headerArr = header.split('\r\n').slice(1)
  headerArr.map(item => {
    const itemArr = item.split(':')
    response[itemArr[0]] = itemArr[1].trimStart()
  })
  response.body = body.trimStart()
  console.log(response);
  console.log(Buffer.from(body, 'utf-8').byteLength);
}

socket.on('data', (chunk) => {
  const res = chunk.toString('utf-8')
  // console.log('接收到的消息：' + res);
  convert(res)
  socket.end()
})

socket.write(`GET / HTTP/1.1
Host: duyi.ke.qq.com
Connection: keep-alive

`)