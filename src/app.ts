import * as Koa from 'koa'
import * as logger from 'koa-logger'
import * as KoaRouter from 'koa-router'
import * as bodyParser from 'koa-bodyparser'

import conf from './config'

import routes from './routes/index'

const app = new Koa()
const router = new KoaRouter()

app.use(logger())
app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())

// 引入 router
routes.setRouter(router)

app.use(ctx => {
  ctx.status = 404
  ctx.body = JSON.stringify({
    status: '404',
    message: 'not found'
  })
})

// 监听端口
app.listen(3000, () => {
  console.log(`
    程序运行在: http://${conf.hostName}:${conf.port}
    api接口地址: http://${conf.hostName}:${conf.port}/api
    图片文件接口地址: http://${conf.hostName}:${conf.port}/images`
  )
})

