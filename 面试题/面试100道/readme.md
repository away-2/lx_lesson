# 1. parseInt()
# 2. setTimeout, promise, async/await 的区别
# 3. 数组扁平化
# 4. 聊聊HTTP2的多路复用

# 5. 以下方式可以判断数组
    Object.prototype.toString.call() // call 改变了 toString 方法的执行上下文
    instanceof      // 通过原型链查找是否匹配
    Array.isArray()     // 只能判断数组

# 6. 介绍一下回流重绘，以及如何优化
    - 浏览器渲染机制
        1. DOM树
        2. CSSOM树
        3. render树
        4. 计算布局 （回流）
        5. gup绘制页面 （重绘）

    - 页面元素的几何属性发生变化会回流
        1. 窗口大小变化
        2. 添加删除DOM
        3. 初次页面加载
    
    - 浏览器优化
        现代浏览器通过维护一个队列来批量存放 回流行为，至少在下一次浏览器
        刷新之后才会清空队列，减少回流次数
        offsetxxx...
        clientxxx...
        读取 width, height
        getBoundingClientRect()

    - css
        1. 用 transform 替代 top
        2. 用 visibility 替代 display: none
        3. 减少 css 内联
        4. 动画的实现脱离文档流

    - js
        1. 避免频繁操作样式，可以定义css类名
        2. 避免频繁操作DOM, documentFragment

# 7. 全局作用域中，const，let声明的变量不在window，那在哪里？如何获取？

# 8. 合并数组
['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'] 和 ['A', 'B', 'C', 'D'] 变成
['A1', 'A2','A', 'B1', 'B2','B' ,'C1', 'C2', 'C',D1', 'D2','D']

# 9. 对象数组去重

# 10. 封装一个可以设置最大请求次数的函数，请求成功则不再请求，请求失败则一直请求直到达到最大次数
