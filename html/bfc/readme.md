# 什么是BFC
Block formatting Context

是css渲染的一部分，主要决定盒子的布局和浮动相互影响的一个区域


# 创建BFC的方法
1. 浮动（float: left | right）
2. overflow: auto | hidden | scroll | overlay
3. display: inline-block
4. 网格布局 （grid | inline-grid）
5. 表格布局 (table | table-cell | table-caption | inline-table)
6. 弹性布局 （flex | inline-flex）
7. 定位 （absolute | fixed）


# BFC的特点
1. BFC 也维护一个常规的文档流
2. BFC 容器计算高度时，会将浮动元素的高度也计算在内
3. BFC 可以解决 子容器和父容器 margin 重叠的问题
