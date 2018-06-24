import * as KoaRouter from 'koa-router'

import { api, RouterFormat } from './api'

interface RouterSet {
  setRouter(router: KoaRouter): void
  routerList: object
}

const routes: RouterSet = {
  setRouter(router: KoaRouter) {
    this.routerList.forEach((obj: RouterFormat, index: number) => {
      router.get(obj.url, obj.func)
    })
  },
  routerList: [
    api
  ]
}


export default routes