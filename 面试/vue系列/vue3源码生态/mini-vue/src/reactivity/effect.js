
const targetMap = new WeakMap()

let activeEffect = null

export function track(target, type, key) {
    // target:{
    //     key: [effect1, effect2, ...]
    // }
    let depsMap = targetMap.get(target)
    if (!depsMap) { // 初次读取该值，还未添加effect
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
    console.log(`为${key}做的依赖收集:${depsMap}`);

}