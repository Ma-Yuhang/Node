
module.exports = {
  a: 1,
  b: 2,
  // ...this
}
exports.c = 3
this.d = 4
// 一开始 this === exports = module.exports
// 改变 module.exports 后 this === exports
console.log(this === exports);