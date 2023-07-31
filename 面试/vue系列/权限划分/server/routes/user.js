const router = require('koa-router')();
const jwt = require('../utils/jwt');

router.post('/login', (ctx) => {
    let user = ctx.request.body
    let level = 0
    if (user.username === 'admin') {
      level = 3
    } else if (user.username === 'shu') {
      level = 2
    } else {
      level = 1
    }
    if(1){  // 模拟数据库校验成功
        let token = jwt.sign({id:'123', username: user.username, admin: true, level:1 })
        // console.log(token);
        ctx.body = {
            code: 0,
            data: user.username,
            level: level,
            token: token
        }
    }
    console.log(user);
})

router.post('/home', jwt.verify('1'), (ctx) => {
    console.log(ctx.request.headers.authorization);
    // if(authorization)
    ctx.body = {
        code: 0,
        data: 'this is home data'
    }
})
module.exports = router;
