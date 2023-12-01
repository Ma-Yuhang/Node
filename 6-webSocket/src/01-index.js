const net = require('net')

const server = net.createServer(socket => {
  console.log('有客户端连接到服务器');
  socket.once('data', chunk => {
    const httpMsg = chunk.toString('utf-8')
    const httpArr = httpMsg.split('\r\n').slice(1).filter(Boolean)
    const httpArr2 = httpArr.map(h => {
      const i = h.indexOf(':')
      return [h.substring(0, i), h.substring(i + 1).trim()]
    })
    const headers = Object.fromEntries(httpArr2)
    const crypto = require('crypto')
    const hash = crypto.createHash('sha1')
    hash.update(
      headers['Sec-WebSocket-Key'] + '258EAFA5-E914-47DA-95CA-C5AB0DC85B11'
    )
    const key = hash.digest("base64")
    socket.write(`HTTP/1.1 101 Switching Protocols
Connection: Upgrade
Upgrade: websocket
Sec-WebSocket-Accept: ${key}

`)
    socket.on('data', chunk => {
      console.log(chunk);
    })
  })
})



server.listen(8080)