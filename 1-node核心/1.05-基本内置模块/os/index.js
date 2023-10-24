const os = require('os')

console.log(os.arch()); // x64
console.log(os.cpus().length); // cpu的核数
console.log(os.freemem()/2**30); // 剩余多少内存可用（字节）
console.log(os.homedir()); // 用户目录
console.log(os.hostname()); // 主机名
console.log(os.tmpdir()); // 操作系统的临时目录