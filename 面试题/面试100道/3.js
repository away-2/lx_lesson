var arr = [1, 2, [3, 4, [5, 6], 7], 8, 9]
// 数组扁平化
// let newArr = arr.flat(Infinity)
// console.log(newArr);

// function flatten(arr) {
//     let newArr = []
//     function fn(array) {
//         for (let i = 0; i < array.length; i++) {
//             if (Array.isArray(array[i])) {
//                 fn(array[i])
//             } else {
//                 newArr.push(array[i])
//             }
//         }
//     }
//     fn(arr)
//     return newArr
// }

// function flatten(arr) {
//     arr.reduce((pre, item, index, arr) => {
//         return pre.concat(Array.isArray(item) ? flatten(item) : item)
//     }, [])
// }

function flatten(arr) {
    let result = []
    let myArr = [...arr]
    while(myArr.length) {
        let item = myArr.shift()
        if(Array.isArray(item)) {
            myArr.unshift(...item)
        } else {
            result.push(item)
        }
    }
    return result
}

console.log(flatten(arr));