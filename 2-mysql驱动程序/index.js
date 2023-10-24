const mysql = require('mysql2/promise')

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'study_mysql',
  multipleStatements: true
})
async function test(id) {
  // let sql = `SELECT * FROM \`company\` WHERE id=?;`
  // 如果是模糊查询不能直接使用? 应使用concat函数
  let sql = `SELECT * FROM \`company\` WHERE \`name\` like concat('%', ?, '%');`
  // console.log(sql);
  // 不要使用query 应该使用execute
  // const [res] = await connection.query(sql)
  const [res] = await pool.execute(sql, [id])
  console.log(res);
}
// sql注入
test(`渡`)