# webpack打包的原理
1. 读取入口文件内容
2. 分析入口文件，递归的方式去读取模块所依赖的文件，并且生成AST抽象语法树
3. 根据抽象语法树，生成浏览器可以运行的代码

- 细节：
    1. 读文件：fs
    2. 分析文件转AST树：@babel/parser 
    3. 遍历AST树：@babel/traverse（依赖收集）
        @babel/core 和 @babel/preset-env （es6 转 es5）

- 浏览器里的JavaScript没有一个很好的方式去引入其他文件
        