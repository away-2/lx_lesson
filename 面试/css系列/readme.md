# 盒子模型
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



