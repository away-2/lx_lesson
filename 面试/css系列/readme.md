# 1.盒子模型
1. 标准盒模型
width + content + padding + border + margin === 总宽度
width === content

box-sizing: content-box;   // 标准盒模型

2. IE盒模型
width + margin === 总宽度
content + padding + border === width 

box-sizing: border-box;  // 让浏览器以IE盒模型的标准来执行

# 2. css选择器有哪些？优先级？css中可以继承的属性有哪些？
    1. id选择器
    2. class选择器
    3. 标签选择器
    4. 后代选择器
    5. 子选择器  >
    6. 相邻选择器 +
    7. 群组选择器
    8. 伪类选择器 :hover ...
    9. 伪元素选择器 ::after ::before
    10. 属性选择器 []
    11. 层次选择器

    !important > 行内样式 > id选择器 > class选择器 > 标签选择器 

    font-xxx: 会继承
    text-align:
    text-indext:
    direction:
    visibility:
    <!-- font系列 -->
    <!-- text系列 -->
    <!-- 表格布局 -->

# 3. 说说em/px/rem/vh/vw的区别？
    em,rem,vh,vw 都是相对单位，
    em相对于父容器的字体大小，
    rem相对于页面的字体大小，
    vw，vh相对于视窗的大小
    px是绝对单位，是以屏幕的物理发光点为准

# 4. 说说设备像素，css像素，设备独立像素，dpr，ppi之间的区别？
1. css像素：1px === 1 设备独立像素
2. 设备像素(物理像素) (pt)
3. 设备独立像素 (分辨率)
4. device pixel ratio of  设备像素 / 设备独立像素
5. pixel per inch  像素密度

# 5. css中有哪些可以隐藏页面的元素的属性？它们之间有什么区别？
1. opacity: 0;
2. display: none;
3. visibility: hidden;
4. position: absolute;top: -999px;left: -999px;
5. clip-path: polygon(0px 0px, 0px 0px, 0px 0px, 0px 0px);

    - 是否还占据文档流的位置
    是：opacity，visibility，clip-path

    - 是否还能触发点击事件
    是：opacity

    - 是否触发重排重绘
    触发重排：display
    触发重绘：display，visibility，opacity

# 6. 谈谈你对BFC的理解？
 - 是什么？
    BFC的目的是形成一个相对独立的空间，让内部的子元素不会影响到外部的元素，
    BFC内的相邻容器之间的margin不会重叠，BFC容器的高度计算会将浮动元素的高度也计算在内

 - 怎么触发？
    1. float:left,right
    2. overflow: 不为visible
    3. display: inline-xxx, table, grid, flex
    4. position: absolute, fixed

 - 应用场景
    1. 防止margin重叠
    2. 清除浮动

# 7. 水平垂直居中
    水平居中：margin: 0 auto;  块级元素
    - 已知容器的宽高：
        margin，transform，position + 负margin
    - 未知容器的宽高：
        flex, position + transform, grid, table-cell + display

# 8. 如何实现两栏布局，右侧自适应，三栏布局，中间自适应？
    两栏：
        固定宽度 + float 、 flex布局
    三栏：
        左右浮动 + 中间margin （中间最后加载）、 
        左右定位 + 中间margin
        flex (中间没有最先加载)
        table布局 (中间没有最先加载)
        grid布局 (中间没有最先加载)
        float + 负margin (中间最先加载)

# 9. 说说flexbox
    - 是什么？
        我们称之为弹性布局，是一种可以简便，完整，响应式的实现各种页面布局的方式
        采用了flex布局的元素，子元素会自动去到同一行，容器中存在弹性主轴和交叉轴的概念，
        默认主轴是x轴方向，也能通过flex-direction修改主轴

    - 属性
        - 写在父容器上的属性
            1. flex-direction：主轴方向
            2. flex-wrap: 是否换行
            3. flex-flow：row,wrap; 是1，3结合体
            4. justify-content: 主轴对齐方式
            5. align-items: 交叉轴（纵轴）上的对齐方式
            6. align-content：多根轴线（即多行）的对齐方式
        - 写在子容器上的属性
            7. order：定义flex item的排列顺序
            8. flex-grow：定义flex item的放大比例
            9. flex-shrink：定义flex item的缩小比例
            10. flex-basis：定义了在分配多余空间之前，flex item占据的主轴空间       
            11. flex：0 0 200px; 是8，9，10结合体
        
    - 应用场景
        1. 实现多栏布局
        2. 实现水平垂直居中

# 10. 说说grid布局
    - 是什么？
        是一个二维的布局方式，有纵横相交的两组网格线形成的框架性布局结构，
        能同时处理行和列，擅长将一个页面划分为几个区域，以及定义这些区域的大小，
        位置，层次等关系

    - 属性
        1. grid-template-rows： 属性定义每列的高度
        2. grid-template-columns： 可定义每列的宽度
        3. grid-gap: 设置行列之间的间隙
        4. justify-content: 水平
        5. align-items:  垂直
        4. place-items:center center; 设置水平垂直居中

    - 应用场景
        1. 实现多栏布局
        2. 水平垂直居中

# 11. css3中新增了哪些新特性？
    1. 选择器：a[src$=".pdf"] ...
    2. 属性：border-radius，box-shadow，border-image,transfrom,
        transition, animation, 颜色渐变

# 12. css常见的动画实现有哪些？
    1. transition  过渡动画
    2. transform  转变动画
    3. animation    自定义动画

# 13. 聊聊回流重绘
    - 是什么
        回流是指浏览器在加载页面过程中，需要对每个盒子进行布局计算这个过程
        重绘是指浏览器在加载页面过程中，对已经计算好布局的盒子进行GPU绘制的过程

    - 如何触发
        回流：
            1. 页面存在容器的几何属性发生变化
            2. 页面初次刷新
            3. 视窗大小变化
            4. offsetxxx, scrollxxx, clientxxx
            5. 元素的添加或者删除
        重绘：
            元素的非几何属性变化时会发生重绘
                1. color
                2. bgc
                3. border-radius
                4. border-shadow
                5. 背景图
                ...
    - 浏览器的优化策略
        大多数浏览器都会通过维护一个任务队列来存放需要回流的操作，一段时间之后，
        或者队列到达阈值，才会一次性执行所有的回流，这样做的目的是为了尽可能
        的减少页面的回流次数，提升页面渲染效率，但是offsetxxx会强制刷新队列

    - 如何减少回流重绘
        1. 动画：让动画元素都脱离文档流
        2. 尽量减少 js 操作 元素的 css
        3. 当页面需要循环添加元素的时候，可以使用虚拟文档片段
        4. 尽量减少offsetxxx的使用
        5. display: none;之后使用 display: block;（需要对某个dom结构做较多的修改时）

# 14. 什么是响应式布局？基本原理是什么？
    - 页面布局根据用户设备环境的变化进行相应的调整

    - 实现方式：
        1. 媒体查询
        2. rem + 媒体查询
        3. rem + flexible
        4. %
        5. vw/vh

# 15.如何实现视差滚动？（三只松鼠官网）
    1. background-attachment: fixed;   // 背景图固定在初始位置上
    2. perspective  // 让视角变成3D效果，从实现近大远小，离眼睛越近看起来会滚动的越快

# 16. 如果要做优化，css上能做些什么？
    1. 使用合理的选择器，不要嵌套过深
    2. 异步加载css
        js控制
    3. css压缩
    4. 不要使用@import() 引入css， 而是用link标签




