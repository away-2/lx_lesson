function foo(){
    console.log(this.a);
}
const obj = {
    a: 1
}

Function.prototype.myApply = function(context,args){
    if(typeof(this) !== 'function') return this + 'is not a function'
    const fn = Symbol('fn')
    context[fn] = this
    const res = context[fn](...args)
    delete context[fn]
    return res
}

foo.apply(obj,[1,2,3])