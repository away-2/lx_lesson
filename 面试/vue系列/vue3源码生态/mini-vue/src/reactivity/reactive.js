// const mutableHandlers = {} // 深层代理过的对象
// const shallowReactiveHandlers = {}
import { mutableHandlers, shallowReactiveHandlers } from './baseHandlers.js'

export const reactiveMap = new WeakMap() // 存放已经被深层代理过的对象
export const shallowReactiveMap = new WeakMap() // 存放已经被浅层代理过的对象

// 代理标记
export const ReactiveFlags = {
  IS_REACTIVE: '__v_isReactive',  // 被代理过的对象会有这个属性
  RAW: '__v_raw'
}


export function reactive(target) { // 深层代理
  return createReaciveObject(target, reactiveMap, mutableHandlers)
}

export function shallowReactive(target) { // 浅层代理
  return createReaciveObject(target, shallowReactiveMap, shallowReactiveHandlers)
}


// 判断是否是reactive对象
export function isReactive(value) {
  return !!value[ReactiveFlags.IS_REACTIVE]
}


function createReaciveObject(target, proxyMap, proxyHandlers) {
  // proxy
  if (typeof target !== 'object') {
    console.warn(`reactive ${target} 必须一个对象`)
    return target
  }

  // 通过 proxy 创建代理对象，用不同的 map 存储不同类型的reactive依赖关系
  
  // 是否曾经被代理过
  const existingProxy = proxyMap.get(target)
  if (existingProxy) {
    return existingProxy
  }

  // 执行代理
  const proxy = new Proxy(target, proxyHandlers)

  // 缓存该代理对象
  proxyMap.set(target, proxy)
  return proxy
}




// let obj = {a: 1}
// let newobj = new Proxy(obj, {
//   get() {},
//   set(a, b, c, d) {},
//   // ... 13
// })
// newobj.a = 2