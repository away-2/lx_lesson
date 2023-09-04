# webpack
    webpack 的出现主要是解决浏览器里的 javascript 没有一个很好的方式去引入其它的文件这个问题的。
    webpack打包原理:
    实现一个webpack的思路主要有三步：
    1. 读取入口文件内容（使用 fs ）
    2. 分析入口文件，递归的方式去读取模块所依赖的文件并且生成AST语法树
        安装 @babel/parser 转AST树）
    3. 根据AST语法树，生成浏览器可以运行的代码（遍历AST树）
        安装 @babel/traverse 做依赖收集
        安装 @babel/core 和 @babel/preset-env 让es6转es5

    webpack有一个缺点，如果在这个文件中需要改动一点点再保存，webpack的热重载又会重新自动打包一次，
    这对于大型项目是极不友好的，这时间估计等的花都要谢了。那么vite出现了！
# vite
    我们知道，当声明一个 script 标签类型为 module 时，浏览器会对其内部的 import 引用发起 HTTP 请求获取模块内容。那么，vite 会劫持这些请求并进行相应处理。因为浏览器只会对用到的模块发送http请求，所以vite不用对项目中所有文件都打包，而是按需加载，大大减少了AST树的生成和代码转换，降低服务启动的时间和项目复杂度的耦合，提升了开发者的体验。
