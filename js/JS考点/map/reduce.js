let arr = [2,4,7,9,12,34]

// 计算和
// pre 上一次 reduce 的执行结果
let sum = arr.reduce((pre, item, index, arr) =>{
    return pre + item
},0)

console.log(sum);