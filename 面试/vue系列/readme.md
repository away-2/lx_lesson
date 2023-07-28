# 1. 说说你对vue的理解
    - 石器时期  （web报纸）
    - 文明时代  （java + html）
    - 工业革命  （框架出现）
    - 百花齐放  （sass, less, stylus, bootStrap, React, Vue, Angular, V8...）

    - Vue 是什么
        是一个单页应用的渐进式js框架，目的是简化web开发，关注的核心是MVC模式中的视图层，
        采用的是MVVM的数据驱动开发方式

    - MVVM  (Model-View-ModelView)
        1. Model: 模型层，处理业务逻辑和服务端交互
        2. View: 视图层，负责把数据转换为UI展示（html页面）
        3. ViewModel: 视图模型层，主要用来连接Model层和View层

    - 组件化
        1. 将各种逻辑抽象为一个统一的概念  (.vue)
        2. 降低整个系统的耦合性，提高复用性，可以快速完成模块替换
        3. 方便调试，因为组件都是单一职责，可以排除法直接移除组件来调试
        4. 提高了代码的可维护性

    - 指令 v-xxxx

# 2. 说说你对SPA的理解
    - 是什么
        只有一个html文件，通过前端路由的方式将多个代码片段模拟成页面，
        无刷新体验，数据传容易

    - 缺点
        1. 首次渲染速度慢
        2. 不利于搜索引擎抓取   ssr

# 3. 说说你对双向绑定的理解
    - 是什么
        v-model实现了双向绑定，当Model层的数据变化时，View会更新，当View层的数据变化时，Model层状态会更新

    - 原理 （ViewModel）
        1. 数据变化更新视图
        2. 视图变化更新数据

        监听器 （Observer）  解析器（Compiler）

# 4. 说说你对vue生命周期的理解
    - Vue在组件从开始加载到渲染完成的这个时间段内提供的钩子函数
    vue2:
        beforeCreate, created,
        beforeMount, mounted,
        beforeUpdate, updated,
        beforeDestroy, destroyed,
        actived, deactivated (缓存)
        errorCaptured (子组件错误)

    vue3：setup
        onBeforeMount, onMounted,
        onBeforeUpdate, onUpdate,
        onBeforeUnmount, onUnmounted,
        onActivited, onDeactivated,
        onErrorCaptured

# 5. 组件通讯的方法
    1. props    (父子)
    2. emit     (子父)
    3. v-model  (子父)
    4. refs     (子父)
    5. provide/inject   (父子)
    6. vuex/pinia
    7. eventBus     (mitt)

# 6. 说说Vue中的v-show和v-if有什么区别？
    1. 控制方式：
        v-show: display: none; 基于CSS的显示/隐藏指令
        v-if: 基于DOM的添加/删除指令

    2. 编译过程：
        v-if: 需要重新编译（局部）
        v-show: 不需要

    3. 触发生命周期：
        v-if: 会
        v-show：不会

# 7. vue中v-if和v-for同时使用会发生什么？
    vue2: v-for 的优先级高于 v-if，vue的指令在编译时会转化为 render 函数，
          这两个render函数会冲突，会带来性能浪费

    vue3：不影响

# 8. vue2和vue3中，data一定要是一个函数吗？
    是的

# 9. vue给data中的对象添加新属性，页面会更新吗？
    vue2：不会， Object.defineProperty() 无法劫持到未来添加的属性

    vue3：会，   Proxy() 是能感知到未来添加的属性

# 10. nextTick怎么理解？
    Vue在更新DOM时异步执行的一个函数，主要是保证内部逻辑会在DOM加载完毕后再执行

    1. nextTick 会将回调push到一个callbacks数组中
    2. 将数组中的函数放在 xxxx.then() 中执行
    3. xxxx 代表的是 挂载函数

# 11. 说说什么是虚拟DOM？
    - 用js对象来描述真实的DOM

    - 假设，一次操作导致了10个DOM需要修改
      不使用VDOM的情况：浏览器需要重新一个一个的构建这十个dom的DOM树，
                       每构建一个就会重新渲染一次 

      使用VDOM的情况：diff会一次性把所有变更的vnode都找出来，这个过程是不渲染的，
                     全找出来后一次性渲染 

    - 跨平台

# 12. 说说你了解的diff算法？
    - 用于比较VDOM，真实DOM之间的区别的一个同层比较的高效算法

    - diff：深度优先

    - pathVnode 步骤：
        1. 新节点是不是文本节点，如果是直接更新dom的文本内容为新节点
        2. 新旧节点，是否都有子节点，比较子节点
        3. 如果新节点有子节点，老节点没有，直接新增dom
        4. 如果老节点有子节点，新节点没有，直接删除dom


