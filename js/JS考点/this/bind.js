function foo(x,y){
    console.log(this.a,x+y);
}
const obj = {
    a: 1
}

Function.prototype.myBind = function(context,...args) {
    if(typeof(this) !== 'function') return TypeError(`this is not a function`)

    context = context || window
    _this = this
    return function F(...arg) {
        // 判断返回出去的 F 有没有被new
        if(this instanceof F){
            return new _this(...arg,...args)
        }
        _this.apply(context,args.concat(arg)) // [...args,...arg]
        
    }
}
const bar = foo.myBind(obj,1,2)
bar()