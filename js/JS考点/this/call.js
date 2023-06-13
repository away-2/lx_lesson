a.call(b)

Function.prototype.myCall = function(context,...args){
    if(typeof(this) !== 'function') return new TypeError(`${this}.call is not a function`)
    const fn = Symbol('fn')
    context[fn] = this
    const res = context[fn](...args)
    delete context[fn]
    return res
}