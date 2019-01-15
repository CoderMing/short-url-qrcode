import { ConnectionConfig } from "mysql";
// 限制：必须填写database
interface ConnectionLite extends ConnectionConfig {
  database: string;
}
interface Config {
  // 监听的端口
  port: number;
  // 转发出口的端口号
  // 用于有代理的情况
  proxyPort?: number;
  // 主机名 请换成你的域名
  hostName: string;
  //  mysql连接的参数
  mysqlConnect: string | ConnectionLite;
  // 这里计算得出正确的url 用来方便开发时引入
  // 会自动计算 可以不手动赋值
  hostUrl?: string;
}

const _config: Config = {
  port: 3000,
  proxyPort: 80,
  hostName: "localhost",
  mysqlConnect: {
    host: "localhost",
    user: "coderming",
    password: "password",
    database: "short_url"
  }
};

_config.proxyPort = _config.proxyPort || _config.port;
_config.hostUrl = `${_config.hostName}${
  _config.proxyPort === 80 ? "" : ":" + _config.port
}`;

export default _config;
