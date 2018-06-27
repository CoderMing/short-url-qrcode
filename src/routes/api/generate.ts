import * as KoaRouter from 'koa-router'
// import { promisify } from 'util'
import * as qs from 'querystring'
import sql from '../../interface/connection'

const router = new KoaRouter()

router.get('/', async ctx => {
  const query = qs.parse(ctx.request.querystring)
  // 创建hash键
  const hashStr = Math.random().toString(36).substr(2)

  sql.setUrl(<string>query.url, hashStr)
  
  ctx.body = '12312321'
})

export default router