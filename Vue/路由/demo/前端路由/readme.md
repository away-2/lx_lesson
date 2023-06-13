# 前端路由
1. 如何改变url，且不引起页面刷新  (hash)
2. 如何检测到 url 变化

# hash
- url中 hash 值的变更是不会引起页面刷新的，js中存在hashchange事件可以监听到hash值的变化

# history
- 阻止a标签的默认跳转
- 人为给a标签添加点击事件
- history.pushstate() 修改url不会引起页面刷新
- 监听 popstate 事件， 弥补浏览器的前进后退的事件 