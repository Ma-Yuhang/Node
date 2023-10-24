const URL = require('url')

// https默认端口443
// const url = new URL.URL('https://gitee.com:442/a/b/c?name=mayuhang&age=20#sss')
const url = URL.parse('https://gitee.com:442/a/b/c?name=mayuhang&age=20#sss')
/* 
  {
    href: 'https://gitee.com:442/a/b/c?name=mayuhang&age=20#sss',
    origin: 'https://gitee.com:442',
    protocol: 'https:',
    username: '',
    password: '',
    host: 'gitee.com:442', // 域名和端口号
    hostname: 'gitee.com',
    port: '442',
    pathname: '/a/b/c',
    search: '?name=mayuhang&age=20',
    searchParams: URLSearchParams { 'name' => 'mayuhang', 'age' => '20' },
    hash: '#sss'
  } 
*/
console.log(url);