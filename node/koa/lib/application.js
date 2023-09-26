let http = require('http');
let EventEmitter = require('events').EventEmitter; // 错误处理机制
let context = require('./context');
let request = require('./request');
let response = require('./response');

class Koa extends EventEmitter {
    constructor () {
        super();
        this.fn = null
        this.context = context
        this.response = response
        this.request = request
        this.middlewares = []  // 装use中的回调
    }

    use (fn) {
        // this.fn = fn
        this.middlewares.push(fn)
    }
    createContext(req, res) { // 创建ctx
        const ctx = Object.create(this.context)
        const request = ctx.request = Object.create(this.request)
        const response = ctx.response = Object.create(this.response)
        ctx.req = request.req = response.req = req
        ctx.res = request.res = response.res = res
        request.ctx = response.ctx = ctx
        request.response = response
        response.request = request
        return ctx
    }
    compose(middlewares, ctx) {// 将middlewares中的回调执行成洋葱模式  递归
        function dispatch(index) {
            if (index === middlewares.length) return 
            let middleware = middlewares[index];
            middleware(ctx, () => dispatch(index + 1));
        }
        dispatch(0)
    }
    handleRequest(req, res){
        let ctx = this.createContext(req, res)
        // this.fn(ctx)
        this.compose(this.middlewares, ctx)

        res.end(ctx.body)
    }

    listen(...args) {
        let server = http.createServer(this.handleRequest.bind(this))
        server.listen(...args)
    }
}

module.exports = Koa;