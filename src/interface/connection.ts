import * as mysql from 'mysql'
import { promisify } from 'util'

import _config from '../config'

// 曲线救国。。。
// 先将参数的database设置为空 然后连接上再想法子进数据库。。。
let realConf = <mysql.ConnectionConfig>_config.mysqlConnect
let baseName = realConf.database
realConf.database = void 0

const connection = mysql.createConnection(realConf)
const sqlQuery = promisify(connection.query).bind(connection)

connection.connect(function(err) {
  if (err) return console.error('error connecting: ' + err.stack)
})

console.log(baseName)
// 处理没有初始化数据库的问题
if (true) {
  (async () => {
    await sqlQuery(`CREATE DATABASE IF NOT EXISTS ${baseName}`)
    .then(async () => {
      await sqlQuery(`USE ${baseName}`)
    })
    .then(async () => {
      // 初始化列表
      await sqlQuery(
        `CREATE TABLE IF NOT EXISTS url_set (
          prev_url varchar(255) NOT NULL,
          short_url varchar(255) NOT NULL, 
          PRIMARY KEY (prev_url)
        ) COMMENT='';`)
    })
    .catch(() => {
      console.log('?')
    })
  })()
}


async function setUrl(prev: string): Promise<string> {
  let prevData = await sqlQuery(`SELECT * FROM url_set WHERE prev_url='${prev}'`)
  // 处理以前有过该链接的情况
  if (prevData.length === 1) return prevData[0].short_url
  else if (prevData.length > 1) {}
  else {
    // 循环寻找可以用的hashStr
    let hashStr: string
    do {
      hashStr = Math.random().toString(36).substr(2)
    } while (await sqlQuery(`SELECT * FROM url_set WHERE short_url='${hashStr}'`).length)
  
   await sqlQuery(`insert into url_set 
      ( prev_url, short_url) values ( '${prev}', '${hashStr}')`)
    return hashStr
  }
}

async function getUrl(str: string): Promise<string> {
  let queryRes = await sqlQuery(`SELECT prev_url FROM url_set WHERE short_url='${str}'`)
  
  if (queryRes.length === 1) return queryRes[0].prev_url

  return ''
}


export {
  getUrl,
  setUrl,
  connection
}
