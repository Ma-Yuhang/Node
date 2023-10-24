// 自己封装的http网络请求
const http = require('http')
const { EventEmitter } = require('events')

module.exports = class extends EventEmitter {
  constructor(url, options) {
    super()
    this.url = url
    this.options = options
  }
  send(body = '') {
    const request = http.request(this.url, this.options, resp => {
      let res = ''
      resp.on('data', chunk => {
        res += chunk.toString('utf-8')
      })
      resp.on('close', () => {
        this.emit('res', resp.headers, res)
      })
    })
    request.write(body)
    request.end()
  }
}