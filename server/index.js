const koa = require('koa');
const app = new koa();

app.use(async(ctx, next) => {
    ctx.body = 'Hi body'
})

app.listen(3000);