interface Config {
  // 监听的端口
  port: number
  // 主机名 调试期间使用localhost即可
  hostName: string
}

const conf: Config = {
  port: 3000,
  hostName: 'localhost'
}

export default conf