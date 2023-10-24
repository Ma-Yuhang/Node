const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'study_mysql'
})

// 回调形式
connection.query('SELECT * FROM `company`;', (err, res) => {
  console.log(res);
  connection.end()
})