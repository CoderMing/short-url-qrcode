import * as Koa from "koa";
import * as KoaRouter from "koa-router";
import { setLog } from "../interface/connection";
import * as qs from "querystring";

const router = new KoaRouter();

import { RouterFormat } from "./index";

router.get("*", async (ctx: Koa.Context, next) => {
  const query = qs.parse(ctx.request.querystring);
  await setLog(<string>query.url);
  console.log(123);
  await next();
});

const routes: RouterFormat = {
  path: "/",
  router
};

export default routes;
