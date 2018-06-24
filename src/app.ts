import * as Koa from 'koa'
import * as logger from 'koa-logger'
import * as KoaRouter from 'koa-router'
import * as bodyParser from 'koa-bodyparser'

import conf from './config'

const app = new Koa()
const router = new KoaRouter()

app.use(logger())
app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())

router.get('/api', async ctx => {
  ctx.body = 'api'
})

app.use(async ctx => {
  ctx.body = 'hello world'
})

app.listen(3000, () => {
  console.log(`Server running on http://${conf.hostName}:${conf.port}`)
})

