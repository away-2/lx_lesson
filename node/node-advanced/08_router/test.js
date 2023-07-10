const Koa = require('koa')
const router = require('koa-router')()
const cors = require('cors')  
const app = new Koa()

// router.get('/home', () => {
//   console.log('home');
// })
// router.post('/about', () => {
//   console.log('about');
// })
// const inter = app.use(router.routes())

app.use(cors())

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
app.use((ctx, next) => {
  console.log(5);
  next()
  console.log(6);
})

// [
// (ctx, next) => {
//   console.log(1);
//   next()
//   console.log(2);
// },
// (ctx, next) => {
//   console.log(3);
//   next()
//   console.log(4);
// },
// (ctx, next) => {
//   console.log(5);
//   next()
//   console.log(6);
// }

// ]

app.use((ctx) => {
  ctx.body = {
    name: 'hello'
  }
})


app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})