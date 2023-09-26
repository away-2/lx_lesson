# koa
1. listen 
2. use
3. ctx(req, res)
4. next

- 中间件函数的执行顺序是一个洋葱模型的顺序
- 下一个中间件的执行需要上一个中间件函数调用next()