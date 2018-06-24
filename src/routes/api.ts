import * as Koa from 'koa'

export interface RouterFormat {
  url: (string | RegExp)
  method: string
  func(ctx: Koa.Context): any
}

const api: RouterFormat = {
  url: '/',
  method: 'get',
  async func(ctx: Koa.Context) {
    ctx.body = 'ahahahahahahahahh'
  }
}

export { api }