import * as Koa from 'koa'

import { RouterFormat } from './index'

const apiRouter: RouterFormat = {
  path: '/',
  method: 'get',
  async func(ctx: Koa.Context) {
    ctx.body = 'ahahahahahahahahh'
  }
}

export default apiRouter