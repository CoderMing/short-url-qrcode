import * as Koa from 'koa'
import * as KoaRouter from 'koa-router'

const router = new KoaRouter()

import { RouterFormat } from './index'

router.get('/generate', async (ctx: Koa.Context) => {
  ctx.body = '生成二维码'
})

const routes: RouterFormat = {
  path: '/api',
  router
}

export default routes