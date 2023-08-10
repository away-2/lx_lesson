const targetMap = new WeakMap() // 
let activeEffect = null

export function effect(fn, options = {}) {
  const effectFn = () => {
    try {
      activeEffect = effectFn
      return fn()
    } finally {
      activeEffect = null
    }
  }
  if (!options.lazy) {
    effectFn()
  }
  effectFn.scheduler = options.scheduler // 给 watchEffect 使用
  return effectFn
}

// 为属性添加effect
export function track(target, type, key) {
  // targetMap = {
  //   target: {
  //     key: [effect1, effect2, ...]
  //   }
  // }

  let depsMap = targetMap.get(target)
  if (!depsMap) { // 初次读取该值
    // depsMap = new Map()
    // targetMap.set(target, depsMap)
    targetMap.set(target, (depsMap = new Map()))
  }
  let deps = depsMap.get(key)
  if (!deps) { // 当前这个key还未添加过effect
    deps = new Set()
  }
  if (!deps.has(activeEffect) && activeEffect) {
    // 存一个effect
    deps.add(activeEffect)
  }
  depsMap.set(key, deps)

  console.log(`为${key}做的依赖收集：${depsMap}`);
}

// 触发属性的effect
export function trigger(target, type, key) {
  // `target: type:${type} key ${key}`
  const depsMap = targetMap.get(target) // map: {name: [effect], age: [effect1, effect2]}
  if (!depsMap) { // 没有依赖
    return
  }

  const deps = depsMap.get(key) // 拿到被设置值的那个属性的effect
  if (!deps) { // 这个属性从来没有被添加过effect
    return 
  }

  deps.forEach(effectFn => {
    if (effectFn.scheduler) {
      effectFn.scheduler()
    } else {
      effectFn()
    }
  });

}