import { track, trigger } from "./effect.js"
import { isObject } from "../shared/index.js"
import { reactive } from "./reactive.js"

export function ref(val) {
    return createRef(val)

}

function createRef(val) {   // 把val变成响应式
    if (isRef(val)) {
        return val
    }
    return new RefImpl(val)
}

function isRef(val) {
    return !!(val && val.__v_isRef)
}

class RefImpl {
    constructor(val) {
        this.__v_isRef = true
        this._val = convert(val)
    }
    get value () {
        console.log(`ref正在读取值`);
        // 为this实例 做依赖收集
        track(this, 'get', 'value')
        return this._val
    }

    set value (newVal) {
        if (newVal !== this._val) {
        console.log(`ref正在设置值`);
            this._val = convert(newVal)
            trigger(this, 'set', 'value')
        }
    }
}

function convert(val) {
    return isObject(val) ? reactive(val) : val
}