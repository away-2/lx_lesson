const Interceptor = require('./interceptor')

const inter = new Interceptor()

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}
const task = function(id) {
  return async (ctx, next) => {
    console.log(`task ${id} start`);
    ctx.count++
    await wait(1000)
    console.log(`count: ${ctx.count}`);
    await next()
    console.log(`task ${id} end`);
  }
}

inter.use(task(0))
inter.use(task(1))
inter.use(task(2))
inter.use(task(3))
inter.use(task(4))

inter.run({ count: 0 })