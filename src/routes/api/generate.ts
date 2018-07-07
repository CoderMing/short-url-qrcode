import * as KoaRouter from 'koa-router'
import * as qs from 'querystring'
import { setUrl } from '../../interface/connection'
import { createQR } from '../../interface/qrcode'
import _config from '../../config'

const router = new KoaRouter()

router.get('/', async (ctx, next) => {
  const query = qs.parse(ctx.request.querystring)
  if (!query.url) return await next()

  const url = <string>query.url
  const urlReg = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/
  // 域名合法性校验
  if (!urlReg.test(url) || url.length > 100) {
    ctx.status = 403
    ctx.body = {
      status: 403,
      message: 'url error'
    }
    return
  }
  // 防止创建短链接API本身域名的url
  if (url.includes(_config.hostName)) {
    ctx.status = 403
    ctx.body = {
      status: 403,
      message: 'url error: 不能引用本域名的url'
    }
    return
  }
  
  let res = await setUrl(url)
  
  await createQR(res)

  ctx.body = {
    status: 200,
    message: 'request OK',
    url: `${_config.hostUrl}/s/${res}`,
    qrcodeUrl: `${_config.hostUrl}/images/${res}.png`,
  }
})

export default router