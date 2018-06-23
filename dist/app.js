"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const app = new Koa();
app.use(async (ctx) => {
    ctx.body = 'hello world';
});
app.listen(3000);
console.log('Server running on port 3000');
