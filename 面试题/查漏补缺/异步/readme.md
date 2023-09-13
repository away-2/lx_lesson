# js 单线程
- v8 引擎是单线程执行js代码

# 异步

# 微任务，宏任务
微任务：.then(), MutationObserver(), Object.Observer()
宏任务：script, setTimeout, setInterval, setImmediate, UI-rendering

# Event Loop
不断的以一套标准来执行 一个层面 又一个层面的代码

1. 执行同步代码
2. 执行微任务
3. 页面渲染
4. 宏任务
