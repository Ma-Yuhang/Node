const path = require('path')

const path1 = path.resolve(__dirname,'02-path.js')
const path2 = path.join(__dirname, '02-path.js')
console.log(path1);
console.log(path2);