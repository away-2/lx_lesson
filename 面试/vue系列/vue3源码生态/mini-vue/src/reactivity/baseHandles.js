import { reactive, ReactiveFlags, reactiveMap, shallowReactiveMap } from './reactive.js'
import { isObject } from '../shared/index.js'
import { track } from './effect.js'

const get = createGetter() // 当对象被读取值时触发

function createGetter(shallow = false) {
  return function get(target, key, receiver) {
    // 是否已经存在于两个WeakMap中？确定是代理过的
    const isExistMap = () => 
      key === ReactiveFlags.RAW && 
      (receiver === reactiveMap.get(target) || receiver === shallowReactiveMap.get(target))

    if (key === ReactiveFlags.IS_REACTIVE) { // 通过标记来判断对象是否被代理
      return true
    } else if (isExistMap()) { // 通过判断对象是否存在于map中来判断对象是否被代理
      return target
    }

    const res = Reflect.get(target, key, receiver)
    console.log('正在读取值')
    // 为每个被使用的属性去添加副作用函数（依赖收集）
    track(target, 'get', key)

    if (isObject(res)) { // 读取到的值还是对象，那么递归代理
        // 区分深浅层代理
        return shallow ? res : reactive(res)
    }
    return res

  }
}



export const mutableHandlers = { // 深层代理
  get,
  set() {

  },
  has() {

  },
  deleteProperty() {

  }
}

export const shallowReactiveHandlers = {
    get,

}