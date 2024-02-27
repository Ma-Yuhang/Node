const path = require('path');

// 得到当前的工作目录
console.log(process.cwd()); // c:\Users\189690\Desktop\node\1-node核心\1.05-基本内置模块\path

// path.resolve 始终得到一个绝对路径
// console.log(path.resolve(__filename));  // c:\Users\189690\Desktop\node\1-node核心\1.05-基本内置模块\path\index.js
console.log(path.resolve(__dirname, './a')); // c:\Users\189690\Desktop\node\1-node核心\1.05-基本内置模块\path\a
// console.log(path.resolve(''));  // c:\Users\189690\Desktop\node

// path.join 得到的是相对路径 会自动规范化路径
console.log(path.resolve(__dirname, '/a')); // c:\a
console.log(path.join(__dirname, '/a')); // c:\Users\189690\Desktop\node\1-node核心\1.05-基本内置模块\path\a
