import * as Koa from 'koa'
import * as path from 'path'
import * as staticRouter from 'koa-static'

import { RouterFormat } from './index'

const api: RouterFormat = {
  path: /(images|styles)/,
  method: 'get',
  func: staticRouter(path.join(__dirname))
}

export default api