import * as Koa from 'koa'
import * as logger from 'koa-logger'

const app = new Koa()

app.use(logger())

app.use(async ctx => {
  ctx.body = 'hello world'
})

app.listen(3000)

console.log('Server running on http://localhost:3000')
