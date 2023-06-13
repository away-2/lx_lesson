

Array.prototype.my_fill = function(value, start, end){
    if(!start && start !==0){
        start = 0
    }
    end = end || this.length
    for(let i = start;i < end; i++){
        this[i] = value
    }
    return this
}
const arr = new Array(7).my_fill('hello',null,3) // 填充从1开始，3结束
console.log(arr);