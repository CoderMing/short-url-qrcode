import { ConnectionConfig } from 'mysql'

interface Config {
  // 监听的端口
  port: number
  // 主机名 调试期间使用localhost即可
  hostName: string
  //  mysql连接的参数
  mysqlConnect: string | ConnectionConfig
}

const conf: Config = {
  port: 3000,
  hostName: 'localhost',
  mysqlConnect: {
    host     : 'localhost',
    user     : 'root',
    password : 'coderming',
    database : 'short_url'
  }
}

export default conf