import * as Koa from 'koa'
import * as os from 'os'

const app = new Koa()

console.log(os.hostname())

app.use(async (ctx: any) => {
  ctx.body = 'hello world'
})

app.listen(3000)

console.log('Server running on port 3000')