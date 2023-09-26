const Koa = require('./lib/application');
const app = new Koa();

// app.use((ctx, next) => {
//     console.log(ctx.req.url);
//     console.log(ctx.request.req.url);
//     console.log(ctx.response.req.url);
//     console.log(ctx.request.url);
//     console.log(ctx.request.path);
//     console.log(ctx.url);
//     console.log(ctx.path);
//     console.log(ctx.request.query);

//     ctx.response.body = 'hello koa'

//     // ctx.body = 'hello world'
//     console.log(ctx.body);
// })

app.use((ctx, next) => {
    console.log(1);
    next()
    console.log(2);
})
app.use((ctx, next) => {
    console.log(3);
    next()
    console.log(4);
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})

// const http = require('http');
// const server = http.createServer((req, res) => {
//     res.end('hello koa')
// })

// server.listen(3000, () =>{
//     console.log('listening on port 3000');
// })