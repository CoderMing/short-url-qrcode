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

// 监听端口
app.listen(3000, () => {
  console.log(`Server running on http://${conf.hostName}:${conf.port}`)
})

