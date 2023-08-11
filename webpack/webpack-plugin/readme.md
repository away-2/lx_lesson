# webpack 的生命周期

# compiler
    - webpack源码中内置了一系列的钩子函数，分别会在打包过程中的各个时间节点执行

# compilation

# 打造一个插件
    - webpack打包出来的文件引入到html中，在url后面拼接时间戳

    1. 时间戳应该在 html 文件生成出来之前完成
    2. 我们的plugin应该在 html-webpack-plugin 之前生效

# webpack 3种触发钩子的方式
    1. tap 同步触发
    2. tapAsync 异步触发
    3. tapPromise