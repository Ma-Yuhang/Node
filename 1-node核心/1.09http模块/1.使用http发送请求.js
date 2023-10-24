const http = require('http')

// http://yuanjin.tech:5005/api/movie
const request = http.request('http://localhost:8080', { method: 'POST' }, resp => {
  console.log('服务器的响应状态码', resp.statusCode);
  console.log('服务器的响应头', resp.headers);
  let res = ''
  resp.on('data', (chunk) => {
    res += chunk.toString('utf-8')
  })

  resp.on('end', () => {
    console.log('服务器的响应体', res);
  })
})
// request.write('请求')
request.end('请求')