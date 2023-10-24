const path = require('path')
const fs = require('fs/promises')

fs.readFile(path.resolve(__dirname, 'test.txt'), 'utf-8').then(data => {
  console.log(data);
})
