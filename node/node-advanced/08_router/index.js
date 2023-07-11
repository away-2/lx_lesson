const Server = require('./lib/server.js')
const Router = require('./lib/middleware/router.js')

const app = new Server()
const router = new Router()

// 添加路由
app.use(router.get('/test/:course/:lecture', async({route, res}, next) => {
  res.setHeader('Content-Type', 'application/json')
  res.body = route
  await next()
}))
// 默认路由
app.use(router.all('.*', async({req, res}, next) => {
    res.setHeader('Content-Type', 'text/html')
    res.body = '<h1>Hello World</h1>'
    await next()
}))

// 添加拦截切面
// app.use(async ({res}, next) => {
//   res.setHeader('Content-Type', 'text/html')
//   res.body = '<h1>Hello World</h1>'
//   await next()
// })

app.listen({port: 3000, host: 'localhost'})