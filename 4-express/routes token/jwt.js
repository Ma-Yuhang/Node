const jwt = require('jsonwebtoken')

const secret = 'mayuhang' // 对称密钥
// 颁发token
exports.publish = function (info = {}, maxAge = 3600 * 24 * 7) {
  const token = jwt.sign(info, secret, {
    expiresIn: maxAge
  })
  return token
}

// 验证token
exports.verify = function (req) {
  try {
    const token = req.headers.authorization.split(' ')[1]
    if (token) {
      return jwt.verify(token, secret)
    } else {
      return null
    }
  } catch (error) {
    return null
  }
}