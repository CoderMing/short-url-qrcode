import * as mysql from 'mysql'
import { promisify } from 'util'

import _config from '../config'

const connection = mysql.createConnection(_config.mysqlConnect)
const sqlQuery = promisify(connection.query).bind(connection)

connection.connect(function(err) {
  if (err) return console.error('error connecting: ' + err.stack)
})

// , (err, results) => {
//   if (err) {
//     connection.query( `CREATE DATABASE IF NOT EXISTS short_url`,
//                       (err, results) => {
//                         if (err) throw err
//                         console.log('检测到未配置数据库，已自动创建 short_url 为名的数据库')
//                         connection.query('USE short_url')
//                       })
//     return
//   }
//   console.log('已自动进入 short_url 为名的数据库')                    
// }
// 处理没有初始化数据库的问题
if (!(<mysql.ConnectionConfig>_config.mysqlConnect).database) {
  (async () => {
    await sqlQuery('USE short_url')
    .then(() => {
      console.log('已自动进入 short_url 为名的数据库')
    })
    .catch(async () => {
      await sqlQuery('CREATE DATABASE IF NOT EXISTS short_url')
      .then(async () => {
        console.log('检测到未配置数据库，已自动创建 short_url 为名的数据库')
        await sqlQuery('USE short_url')
      })
    })
  })()
}
// 初始化列表
sqlQuery(
  `CREATE TABLE IF NOT EXISTS short_url.url_set (
    prev_url varchar(255) NOT NULL,
    short_url varchar(255) NOT NULL, 
    PRIMARY KEY (prev_url)
  ) COMMENT='';`)
.then(() => {
    console.log('已生成short_url表')
})

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
  
    console.log(await sqlQuery(`insert into url_set 
      ( prev_url, short_url) values ( '${prev}', '${hashStr}')`))
    return hashStr
  }
}

async function getUrl(str: string): Promise<string> {
  let queryRes = await sqlQuery(`SELECT prev_url FROM url_set WHERE prev_url='${str}'`)
  
  console.log(queryRes)
  if (queryRes.length === 1) return queryRes[0].prev_url

  return ''
}
export {
  getUrl,
  setUrl,
  connection
}
// 
// , 
//       (err, result) => {
//         if (err) reject(err)
//         if (result.length === 0) {

          // connection.query
//             (err, res) => {
//               if (err) reject(err)
//               else resolve(res)
//             }
//           )
//         }
//         else {
          
//           resolve(result)
//         }
//       }
//     ) 
//   }