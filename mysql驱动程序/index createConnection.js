const mysql = require('mysql2/promise')

async function test(id) {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'study_mysql',
    multipleStatements: true
  })
  let sql = `SELECT * FROM \`company\` WHERE id=?;`
  // console.log(sql);
  // 不要使用query 应该使用execute
  // const [res] = await connection.query(sql)
  const [res] = await connection.execute(sql, [id])
  console.log(res);
  connection.end()
}
// sql注入
test(`''; delete from company where id = 4;`)