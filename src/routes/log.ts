import * as Koa from "koa";
import * as KoaRouter from "koa-router";

const router = new KoaRouter();

import { RouterFormat } from "./index";

router.get("/", async (ctx: Koa.Context) => {
  ctx.redirect("https://github.com/CoderMing/short-url-qrcode");
});

const routes: RouterFormat = {
  path: "/",
  router
};

export default routes;
