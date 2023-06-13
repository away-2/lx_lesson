# 回流重绘
## 输入url到页面渲染 （后半段）
- 页面加载过程发生了什么 ？
    1. DNS 域名解析。
    2. 建立 TCP 连接（三次握手）。
    3. 发送 HTTP 请求。
    4. 服务器端处理请求。
    5. 返回响应结果。
    6. 关闭 TCP 连接（四次挥手）。
    7. 浏览器解析 HTML。
    8. 浏览器页面布局渲染。

# 浏览器获取到页面资源后做了什么 （7，8）
    1. 浏览器加载HTML代码，将其解析为 DOM 树
    2. 加载 CSS 代码， 将其解析为 CSSOM 树
    3. DOM Tree + CSSOM Tree = Render Tree

    4. 计算布局，render树中的每一个节点都会计算一遍（回流）
    5. GPU 绘制 一个又一个图层（重绘）(每个div都相当于一个图层)


# Layout(回流):根据生成的渲染树，进行回流(Layout)，得到节点的几何信息（位置，大小）
# Painting(重绘):根据渲染树以及回流得到的几何信息，得到节点的绝对像素生成渲染树

# 什么时候会发生回流呢？
    1. 视窗大小变化
    2. DOM几何属性发生变化
    3. 添加或者删除DOM
    4. offsetWidth, offsetHeight...,clientWidth...,scrollTop...

    - 局部回流

    - 回流需要更新渲染树， 性能开销大

# 什么时候会发生重绘呢？
元素的非几何属性变化时会发生重绘
1. color
2. bgc
3. border-radius
4. box-shadow
5. 背景图
...

### 回流一定会触发重绘，而重绘不一定会回流

# 浏览器的渲染队列

    - 浏览器维护了一个渲染队列，当我们修改了元素的几何属性，导致浏览器发生回流和重绘时，
    浏览器会将该操作存进队列，等待队列中的内存到达一定的阈值，或者到了一定时间时，浏览器
    会一次性批量操作

# 强制刷新队列
offsetTop、offsetLeft、offsetWidth、offsetHeight
scrollTop、scrollLeft、scrollWidth、scrollHeight
clientTop、clientLeft、clientWidth、clientHeight
getComputedStyle()
getBoundingClientRect
以上属性和方法都需要返回最新的布局信息，因此浏览器不得不清空队列，触发回流重绘来返回正确的值。因此，我们在修改样式的时候，**最好避免使用上面列出的属性，他们都会刷新渲染队列。**如果要使用它们，最好将值缓存起来。


# 优化
1. 当一个dom节点display:none 时，它边不参加render树的构建 display:block
2. 页面添加额外结构时，使用虚拟文档片段
3. 使用克隆元素

