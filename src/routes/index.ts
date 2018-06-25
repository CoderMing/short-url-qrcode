import * as KoaRouter from 'koa-router'
import * as Koa from 'koa'

import api from './api'
import staticRoute from './static'
// RouterSet 格式
interface RouterSet {
  // setRouter函数，用于在主函数中引入router
  setRouter(router: KoaRouter): void
  // router列表
  // 内容为RouterFormat
  routerList: {
    [index: number]: RouterFormat
  }
}
// Router Module 输出的格式
export interface RouterFormat {
  // 监听的路由
  path: (string | RegExp)
  // 监听的方式，string或者string数组
  method: (string | string[])
  // 操作函数
  // async function 参数为ctx, next
  func: Koa.Middleware
}

const routes: RouterSet = {
  setRouter(router: KoaRouter) {
    this.routerList.forEach((obj: RouterFormat, index: number) => {
      router.get(obj.path, obj.func)
    })
  },
  routerList: [
    api,
    staticRoute
  ]
}

export default routes