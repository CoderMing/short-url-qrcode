import * as KoaRouter from 'koa-router'

import geneRouter from './generate'

const router = new KoaRouter()

import { RouterFormat } from '../index'

router.use('/generate', geneRouter.routes(), geneRouter.allowedMethods())

const routes: RouterFormat = {
  path: '/api',
  router
}

export default routes