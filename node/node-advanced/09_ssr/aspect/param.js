// 参数的解析  get请求
const querystring = require('querystring');

module.exports = async (ctx, next) => {
    const { req } = ctx
    const { query } = new URL(`http://${req.headers.host}${req.url}`)
    ctx.params = querystring.parse(query)
    await next()
}