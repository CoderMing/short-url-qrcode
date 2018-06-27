import { ConnectionConfig } from 'mysql'

interface Config {
  // 监听的端口
  port: number
  // 主机名 调试期间使用localhost即可
  hostName: string
  //  mysql连接的参数
  mysqlConnect: string | ConnectionConfig
  // 这里计算得出正确的url 用来方便开发时引入
  // 会自动计算 可以不手动赋值
  hostUrl?: string
}

const _config: Config = {
  port: 3000,
  hostName: 'localhost',
  mysqlConnect: {
    host     : 'localhost',
    user     : 'root',
    password : 'coderming',
    database : 'short_url'
  },
}

_config.hostUrl = `http://${_config.hostName}${
                    _config.port === 80 ? '' : ':' + _config.port}`

export default _config