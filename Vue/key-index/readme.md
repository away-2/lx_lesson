[1, 2] => [2, 1]
<!-- watcher -->
vm.update(vm.render())

# 新 vnode vs 旧 vnode  (__path__ 过程)
1. 根节点不一样，直接销毁旧vnode， 渲染新vnode  （同城比较）
2. 节点一致，尽量复用
3. 对children子节点进行比较
4. 如果新的vnode有children 而旧的没有 （新增）
5. 如果新的vnode没有children 而旧的没 （删除）
6. 如果新旧vnode都有children
7. diff

# 没有key会怎样？
diff优化会失效

# 为什么不要用index作为key
- diff判断的原本可复用的vnode会被视为不可复用，导致优化失败
数组下标index不会改变，如果用index作为key，可复用的vnode也会被视为不可复用，与没有key差不多，优化失败

- 当删除头部节点时，可能会导致diff将头结点判断为可复用项

# 随机数作key？怎么说？
- 所有节点key都会重新生成导致无节点可复用