import * as mysql from 'mysql'

import _config from '../config'

const connection = mysql.createConnection(_config.mysqlConnect)

connection.connect(function(err) {
  if (err) return console.error('error connecting: ' + err.stack)
})


// 处理没有初始化数据库的问题
if (!(<mysql.ConnectionConfig>_config.mysqlConnect).database) {
  connection.query('USE short_url', (err, results) => {
    if (err) {
      connection.query( `CREATE DATABASE IF NOT EXISTS short_url`,
                        (err, results) => {
                          if (err) throw err
                          console.log('检测到未配置数据库，已自动创建 short_url 为名的数据库')
                          connection.query('USE short_url')
                        })
      return
    }
    console.log('已自动进入 short_url 为名的数据库')                    
  })  
}
// 初始化列表
connection.query(
  `CREATE TABLE IF NOT EXISTS \`short_url\`.\`url_set\` (
    \`prev_url\` varchar(255) NOT NULL,
    \`short_url\` varchar(255) NOT NULL, 
    PRIMARY KEY (\`prev_url\`)
  ) COMMENT='';`, (err, results) => {
    if (err) throw err
    console.log('已生成short_url表')
})

function setUrl(prev: string, short: string): void {
  connection.query(
    `insert into \`url_set\` 
    ( \`prev_url\`, \`short_url\`) values 
    ( '${prev}', '${short}')`, (err, res) => {
      
    })
}
export default {
  setUrl,
  connection
}