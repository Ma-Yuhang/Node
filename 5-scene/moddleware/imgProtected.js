const { URL } = require('node:url')

module.exports = (req, res, next) => {
  const host = req.headers.host
  const referer = req.headers.referer
  console.log(host);
  console.log(referer);
  next()
  // const refererHost = new URL(req.headers.referer).host

  // if(host === refererHost) {
  //   next()
  //   return
  // }else {
  //   res.status.send({data:'不存在'})
  //   req.url = '/'
  // }
}