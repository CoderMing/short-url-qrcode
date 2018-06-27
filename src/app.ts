import * as Koa from 'koa'
import * as logger from 'koa-logger'
import * as bodyParser from 'koa-bodyparser'

import conf from './config'

import router from './routes/index'

const app = new Koa()

app.use(logger())
app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())

// 引入 router
app.use(router.routes())

app.use(ctx => {
  ctx.status = 404
  ctx.body = JSON.stringify({
    status: '404',
    message: 'not found'
  })
})

// 监听端口
app.listen(`${conf.port}`, () => {
  console.log(`\
    程序运行在: http://${conf.hostName}:${conf.port}
    点此测试: http://${conf.hostName}:${conf.port}/api/generate?url=https://coderming.com`
  )
})

