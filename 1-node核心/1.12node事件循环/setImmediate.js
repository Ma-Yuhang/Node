setImmediate(() => {
  console.log('setImmediate'); // checks队列
})
setTimeout(() => {
  console.log('setTimeout'); // timers队列
})
// 这种情况执行顺序不确定(没有其他代码)

// 但如果有其他代码执行消耗时间 比如加一行同步代码 那么一定是setTimeout先执行
// console.log('1'); 