let arr = [2,4,7,9,12,34]

// 值>10
let arr2 = arr.filter((item, index, arr) =>{
    return item > 10
})

console.log(arr2);