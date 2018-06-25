import * as Koa from 'koa'

import { RouterFormat } from './index'

const cloverRouter: RouterFormat = {
  path: '/',
  method: 'get',
  async func(ctx: Koa.Context) {
    ctx.body = '这是首页'
  }
}

export default cloverRouter