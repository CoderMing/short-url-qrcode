import * as path from 'path'
import * as staticRouter from 'koa-static'
import * as KoaRouter from 'koa-router'

const router = new KoaRouter()

import { RouterFormat } from './index'

router.get('images/*', staticRouter(path.join(__dirname, '../')))
      .get('styles/*', staticRouter(path.join(__dirname, '../')))

const routes: RouterFormat = {
  path: '/',
  router
}

export default routes