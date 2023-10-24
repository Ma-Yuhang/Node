// 最后执行
setImmediate(() => {
  console.log('setImmediate');
})
// 宏任务
setTimeout(() => {
  console.log('setTimeout');
})
// 微任务
new Promise((resolve, reject) => {
  resolve('Promise')
}).then(value => {
  console.log(value);
})
// tick队列，比微任务先执行
process.nextTick(() => {
  console.log('nextTick');
})
// 微任务队列
queueMicrotask(() => {
  console.log('queueMicrotask');
})
console.log('主线程');
/* 
主线程
nextTick
Promise
queueMicrotask
setTimeout
setImmediate 
*/
