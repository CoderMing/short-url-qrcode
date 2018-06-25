import * as path from 'path'
import * as staticRouter from 'koa-static'

import { RouterFormat } from './index'

const imagesRouter: RouterFormat = {
  path: '/images/*',
  method: 'get',
  func: staticRouter(path.join(__dirname, '../'))
}

const stylesRouter: RouterFormat = {
  path: '/styles/*',
  method: 'get',
  func: staticRouter(path.join(__dirname, '../'))
}

export { imagesRouter, stylesRouter }