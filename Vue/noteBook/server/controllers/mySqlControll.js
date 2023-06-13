// 让node能连接上mysql
const mysql = require('mysql')
const config = require('../config')

// 创建线程池
const pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  port: config.database.PORT
})

// 连接数据库，执行sql语句
const allService = {
  query: function(sql, values) {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => { // 连接数据库
        if (err) {
          reject(err)
        } else { // 连接成功
          connection.query(sql, values, (err, rows) => { // 执行sql语句
            if (err) {
              reject(err)
            } else { // sql语句执行成功
              resolve(rows)
            }
            connection.release() // 断开连接
          })
        }
      })
    })
  }
}

// 登录
const userLogin = (username, password) => {
  let _sql = `select * from users where username="${username}" and password="${password}";`
  return allService.query(_sql)
}

// 查找
const userFind = (username) => {
  let _sql = `select * from users where username="${username}";`
  return allService.query(_sql)
}

// 注册
const userRegister = (values) => {
  let _sql = `insert into users set username=?,password=?,nickname=?;`
  return allService.query(_sql, values)
}

// 根据分类查找对应的笔记列表
const findNoteListByType = (note_type) => {
  let _sql = `select * from note where note_type="${note_type}";`
  return allService.query(_sql)
}

// 根据id查找对应的笔记
const findNoteDetailById = (id) => {
  let _sql = `select * from note where id="${id}";`
  return allService.query(_sql)
}

// 发布笔记
const notePublish = (values) => {
  let _sql = `insert into note set userId=?,title=?,note_type=?,note_content=?,c_time=?,m_time=?,head_img=?,nickname=?;`
  return allService.query(_sql, values)
}


module.exports = {
  userLogin,
  userFind,
  userRegister,
  findNoteListByType,
  findNoteDetailById,
  notePublish
}