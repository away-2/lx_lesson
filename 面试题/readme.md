1. 文件压缩怎么实现的
    -- 将资源读成Buffer流，使用node中的zlib模块进行压缩，设置响应头来告诉浏览器以哪种方式进行解压

2. 怎么用JWT生成token的，说说形成token的一个大概流程
    -- 1. 前端发登录请求
        2. 后端接收到账号后，使用jwt进行加密生成token，并返回token给前端
        3. 前端登录成功后将token做本地保存
        4. 前端在之后的所有请求头中携带 token 给后端
        5. 后端通过jwt校验 token 是否合法

3.     cookie              localStorage        sessionStorage          indexedDB
        后端操作存储          前端操作存储          前端操作存储            前端操作存储

        可设置过期时间        一直在除非手动清理     页面关闭自动清理        一直存在除非手动清理               

        4k                        5M                    5M                  无限大

        每次携带在header中      不参与                  不参与                 不参与

4. 数据类型有哪些
    基本数据类型：string, number, boolean, null, undefined, symbol, bigint
    引用数据类型：array, object, function, map, set, 正则 ...

5. 组件之间的通信方式有哪些
    -- 1. props    (父子)
        2. emit     (子父)
        3. v-model  (子父)
        4. refs     (子父)
        5. provide/inject   (父子)
        6. vuex/pinia
        7. eventBus     (mitt)

6. 用过大屏吗？什么是Canvas，基本用法是什么？
    -- 是H5提供的一个画布标签，可使用js在该容器上绘制图形

7. js中的事件循环？同步代码和异步代码怎么区分的
    - 是什么？
        一种运行机制
        因为js是单线程的，单线程会存在 阻塞 问题，所以引入了一种循环执行机制，称之为 event-loop
    - event-loop
        1. 判断同步和异步，执行同步（属于宏任务）
        2. 调用栈空出来后，查找是否有异步任务需要执行
        3. 执行异步中的微任务
        4. 渲染页面（有需要的情况下）
        5. 执行宏任务（相当于是下一次的event-loop开始）
    - 微任务：Promise.then, await(下一行代码会变成异步), process.nextTick, MutationObserver
    - 宏任务：script(同步代码),setTimeout() / setImmediate() / setInterval(), I/O, 
            UI-rendering(页面渲染) ,MessageChannel, postMessage
            
8. vue2和vue3的区别
    -- 1. 速度更快（重写了虚拟DOM的实现，编译模板的优化，初始化组件更高效，
            update性能提高了1.3~2倍，ssr速度提高了2~3倍）
        2. 体积更小（更好的去tree-sharking，只打包用的上的代码）
        3. 更易维护（Composition API，函数式编程）
        4. 更接近原生开发
        5. 更灵活的使用（API可以独立于vue使用）
        6. 更好的ts支持

9. uniapp的页面生命周期有哪些，怎么使用的

10. 聊聊原型链
    - 是什么
        js中的对象都拥有一个原型对象，对象中的 __proto__ 指向该原型对象
        js中的函数都拥有一个 原型 prototype
        对象的隐式原型 === 创建该对象的函数的显示原型

        当视图访问一个对象属性时，js引擎会在对象上搜索，找不到的话会继续去对象的原型上搜索，
        因为对象的原型中还有原型，所以js引擎会一层一层的往上一个原型中搜索，直到找到该属性或者
        达到该属性或者达到运行的末尾null

        js中查找对象属性的这种链状查找关系称之为原型链
    - 作用
        实现继承

11. ts泛型
    举例：当函数接受参数的类型不确定时，我们便无法声明函数的类型，可以使用泛型声明来充当占位符，等到传入参数时ts会推导参数的类型

12. 讲下vue-router，它的原理以及怎么使用的
    - 前端路由的原理
    - vue-router 源码

1. 自己的项目layui+jquery为什么选择这个框架
2. vue2和vue3的区别
3. defineProperty和proxy区别
  -- 1. defineProperty 用于劫持对象，不会返回一个新的对象，可以设置对象中某个属性是否可写，可枚举，可配置和默认值
     2. defineProperty 通过get，set方法可以劫持对象的读取和设置值的行为
     3. proxy 会返回一个对象，该对象称之为代理对象
     4. 代理对象上的13种对象行为都被 proxy中的get,set,has... 等函数代理

4. defineProperty的实现响应式原理
    -- 1. 循环劫持响应式原理
        2. 递归对象中的子对象，实现层层响应
        3. 对于数组，重写数组原型上的方法

5. 浅拷贝和赋值的区别

6. css中实现一个朝右的直角三角形箭头
7. css中选择器有哪些，优先级
8. 一个大div（没有设置高度）套一个小div（设置高度，浮动），大div有没有高度，怎么让他有高度
9. 说说nextTick 以及和 onMounted的区别
    -- 1. onMounted 执行一次  nextTick 会在dom更新后重新执行
        2. onMounted 更早 
        3. onMounted 只能写在setup里面，而nextTick可以写在任意函数中



1. 讲下盒模型
2. 讲下flex布局，如何垂直居中
3. ref和reactive的区别
4. proxy为什么比Object.defineProperty效率高？
5. slice和splice的区别，哪个会改变原数组？
6. 伪类和伪元素的区别
7. 父组件想要调用子组件的一个方法怎么调用？比如子组件里有一个函数输出hello，怎么让父组件调用并输出hello？
8. threejs里如何判断两个物体是否垂直
9. 讲下threejs里的着色器
10. threejs里将一个正方体从下往上，做出渐变色效果。
11. promise.all()里有三个接口请求，第一个失败了，后面还会执行吗？
12. mysql里有用户表和商品表，如何查询一个用户是否买了某件商品
13. pinia里 判断两个对象是不是同一个(有点忘了，反正是问如何判断两个xxx是不是同一个)


