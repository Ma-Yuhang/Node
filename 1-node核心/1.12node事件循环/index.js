/* 在node事件循环中
    1.timers：setInterval和setTimeout(存放定时器的回调)
    2.pending callbacks： 可忽略
    3.idle,prepare: 可忽略
    4.poll队列： 除了timers、checks 绝大部分回调都会放到该队列(文件的读取，监听用户请求)
    5.checks: setImmediate
    6.close callbacks
*/


queueMicrotask(() => {
  console.log('queueMicrotask');
})
Promise.resolve().then(() => {
  console.log('promise');
})

process.nextTick(() => {
  console.log('nextTick');
})