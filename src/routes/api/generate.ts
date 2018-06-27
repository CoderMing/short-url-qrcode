import * as KoaRouter from 'koa-router'
// import { promisify } from 'util'
import * as qs from 'querystring'
import { setUrl } from '../../interface/connection'
import _config from '../../config'

const router = new KoaRouter()

router.get('/', async (ctx, next) => {
  const query = qs.parse(ctx.request.querystring)
  if (!query.url) return await next()

  let res = await setUrl(<string>query.url)
  console.log(res)
  
  ctx.body = {
    url: `http://${_config.hostName}${
          _config.port === 80 ? '' : ':' + _config.port
          }/s/${res}`
  }
})

export default router