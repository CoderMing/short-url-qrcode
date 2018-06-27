import * as KoaRouter from 'koa-router'
import * as redis from 'redis'
import { promisify } from 'util'
import * as qs from 'querystring'

const router = new KoaRouter()
const redisClient = redis.createClient()

// const clientAsync = ((client) => {
//   return new Proxy(client, {
//     get(val) {
//       if (typeof val !== 'function') return client[val]
//     }
//   })
// })(redisClient)

const getKeyAsync = promisify(redisClient.get).bind(redisClient)
const hsetKeyAsync = promisify(redisClient.hset).bind(redisClient)
const setKeyAsync = promisify(redisClient.set).bind(redisClient)

redisClient.on('error', err => {
  console.log(err)
})

router.get('/', async ctx => {
  const query = qs.parse(ctx.request.querystring)
  
  ctx.body = '12312321'
})

export default router