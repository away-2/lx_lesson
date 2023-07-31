const Koa = require('koa');
const cors = require('koa2-cors');
const bodyParser = require('koa-bodyparser');
const userRouter = require('./routes/user')

const app = new Koa()

app.use(bodyParser())
app.use(cors())
app.use(userRouter.routes(),userRouter.allowedMethods())

app.listen(3000, () => {
    console.log('server listening on port 3000');
})