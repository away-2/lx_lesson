import { 
  reactive, 
  ReactiveFlags, 
  reactiveMap, 
  shallowReactiveMap 
} from './reactive.js'
import { isObject, hasOwn } from '../shared/index.js'
import { track, trigger } from './effect.js'

const get = createGetter() // 当对象被读取值时触发
const set = createSetter() // 当对象被设置值时触发
const shallowReactiveGet = createGetter(true)

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
    console.log('正在读取值');

    // 为每个被使用的属性去添加副作用函数（依赖收集）
    track(target, 'get', key)

    if (isObject(res)) { // 读取到的值仍然是对象，那么递归代理
      // 区分深，浅层代理
      return shallow ? res : reactive(res)
    }

    return res

  }
}

function createSetter() {
  return function set(target, key, value, receiver) {
    console.log(`设置${key}的值为：${value}`);
    const result = Reflect.set(target, key, value, receiver)
    // 触发该属性身上的 effect 函数
    trigger(target, 'set', key)
    return result
  }
}

function has(target, key) {
  console.log(`你正在判断对象中是否存在key为${key}`);
  const res = Reflect.has(target, key)
  track(target, 'has', key)
  return res
}

function deleteProperty(target, key) {
  console.log(`正在删除key: ${key}`);
  const hadKey = hasOwn(target, key)
  const result = Reflect.deleteProperty(target, key)
  if (result && hadKey) { // 删除成功
    // 触发该属性身上绑定的effect
    trigger(target, 'delete', key)
  }
 
  return  result
}

export const mutableHandlers = { // 深层代理
  get,
  set,
  has,
  deleteProperty
}

export const shallowReactiveHandlers = {
  get: shallowReactiveGet,
  set,
  has,
  deleteProperty
}





// {
//   get() {

//   },
//   set(newVal) {
//     target[key] = newVal
//     updateView()
//   }
// }