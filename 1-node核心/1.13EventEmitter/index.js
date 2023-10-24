const myRequest = require('./myRequest')

const request = new myRequest('http://yuanjin.tech:5005/api/movie')

request.send()

request.on('res', (headers, body) => {
  console.log('响应头', headers);
  console.log('响应体', body);
})