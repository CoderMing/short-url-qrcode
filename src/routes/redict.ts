import * as KoaRouter from 'koa-router'
import { getUrl } from '../interface/connection'

const router = new KoaRouter()

import { RouterFormat } from './index'

router.get('/:str', async (ctx, next) => {
  let str = ctx.params.str
  let res = await getUrl(str)

  if (res.length) {
    ctx.response.redirect(`${res}`)
  }
})

const routes: RouterFormat = {
  path: '/s',
  router
}

export default routes