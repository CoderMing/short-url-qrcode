import * as KoaRouter from "koa-router";

import staticRoutes from "./static";
import apiRoutes from "./api";
import cloverRoutes from "./clover";
import redictRoutes from "./redict";
import logRoutes from "./log";

const router = new KoaRouter();

// Router Module 输出的格式
export interface RouterFormat {
  // 监听的路由
  path: string | RegExp;
  // Router主体
  router: KoaRouter;
}

const routerList: RouterFormat[] = [
  logRoutes,
  staticRoutes,
  apiRoutes,
  cloverRoutes,
  redictRoutes
];

routerList.forEach((obj, index) => {
  router.use(obj.path, obj.router.routes(), obj.router.allowedMethods());
});

export default router;
