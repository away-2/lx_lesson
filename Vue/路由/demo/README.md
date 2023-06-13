# router
1. 所有的vue的组件，都需要被use
2. use接受一个参数plugin， plugin可以是一个对象，那么它里面就必须包含一个install函数，plugin也可以是一个函数，那么它将被当做成install函数执行
3. 