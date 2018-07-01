# 短链接及二维码API

[![Build Status](https://travis-ci.org/CoderMing/short-url-qrcode.svg?branch=master)](https://travis-ci.org/CoderMing/short-url-qrcode)

本后台是使用 NodeJS &amp; MySql &amp; TypeScript 搭建的短链接API，同时自带生成二维码的接口。

线上地址：http://s.coderming.com

目前接口暂无限制，后期可能会添加请求限制机制。建议搭建在自己的平台下。

## API文档

GET请求。

生成短链接接口：

```
/api/generate?url=[目标链接的url]
// url参数格式：同完整的url一致
返回: JSON 具体格式下面有写
例子：
http://s.coderming.com/api/generate?url=https://coderming.com
返回：
{
    "status":200,
    "message":"request OK",
    "url": "http://s.coderming.com:2369/s/87qnhvivyvk", //短链接
    "qrcodeUrl": "http://s.coderming.com:2369/images/87qnhvivyvk.png" // 短链接对应的二维码
}
```



## 代码结构

```
/short-url-qrcode
├── LICENSE
├── README.md
├── gulpfile.js
├── package.json
├── src // 代码目录
|  ├── app.ts // 入口文件
|  ├── config-example.ts // 配置文件样例
|  ├── images // 图片文件夹，生成的二维码会缓存在这儿
|  ├── interface // 接口文件夹
|  ├── routes // 路由。代码逻辑主要在这里
|  └── styles // 样式表文件夹
├── test
|  └── test.js // 测试文件（目前还没用）
└── tsconfig.json
```



## 如何配置

首先请确保你的电脑安装了node 6+， mysql。

请在安装目录下，clone本仓库：

```
$ git clone https://github.com/CoderMing/short-url-qrcode.git
```

克隆完成后，进入 `src/`文件夹，并将其中的`config-example.ts`复制一份至新的名为`config.ts`的文件。

修改`config.ts`内的配置项。具体的内容已经在文件中注释得很清楚了。

#### 关于数据库的配置

当你填了 `mysqlConnect`的`database`属性后，就无需进入数据库专门建表建库了。这里涉及到了一个曲线救国的方式，具体可以看 [这个代码文件](https://github.com/CoderMing/short-url-qrcode/blob/master/src/interface/connection.ts) 。



然后使用测试命令进行测试：

```
$ npm run dev
```

测试模式采用`ts-node`运行环境。建议测试通过后，运行以下命令将 TypeScript 编译为原生 JavaScript并运行，提高可靠性。

```
$ npm start
```



## Concat

[@CoderMing](https://github.com/coderming)
