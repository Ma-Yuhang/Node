const mysql = require('mysql2/promise')

async function test() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'study_mysql'
  })

  // const [res] = await connection.query('SELECT * FROM `company`;')

  const [res] = await connection.query('INSERT INTO `company`(`name`, location, buildDate) values("123", "fsdf", curdate());')
  console.log(res);
  connection.end()
}
test()