const util = require('util')

function delay(duration = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(duration)
    }, duration)
  })
}

// delay(2000).then(() => {
//   console.log('执行了');
// })

// function callbackify(fn) {
//   return function (n, func) {
//     fn(n).then(value => {
//       func(value)
//     })
//   }
// }

// util.callbackify() 将promise转成回调形式
// util.promisify() 将回调转成promise形式
const callback = util.callbackify(delay)
callback(500, (err, data) => {
  console.log('执行了', data);
})

const obj1 = {
  a: 1,
  b: [1, 2, 3],
  c: {
    d: 2,
    e: 3
  }
}
const obj2 = {
  a: 1,
  b: [1, 2, 3],
  c: {
    d: 2,
    e: 3
  }
}
console.log(util.isDeepStrictEqual(obj1, obj2)); // 判断两个对象是否严格相等