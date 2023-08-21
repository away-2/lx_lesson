// 原题9.1： outputNth([1, 1, 1, 1], 2) // return [1, 1] 
// outputNth([20, 37, 20, 20, 21], 2) // return [20, 20, 37, 21] 

// 原题9.2： 如果要求outputNth([20,37,20,20,21], 2)//return [20,37,20,21]呢？（按原数组出现的先后返回）

let arr = [20, 37, 20, 20, 21], num = 2  // [20, 20, 37, 21] 


// function outputNth(arr, num) {
//   let map = {} // {20: [20, 20], 37: [37], 21: [21]}
//   for (let i = 0; i < arr.length; i++) {
//     let item = arr[i];
//     if (!map[item]) {
//       map[item] = [item]
//     } else if (map[item].length < num){
//       map[item].push(item)
//     }
//   }
//   let newArr = []
//   for (let key in map) {
//     newArr = newArr.concat(map[key])
//     console.log(newArr);
//   }
//   return newArr
// }

// function outputNth(arr, num) {
//   let map = new Map()
//   let newArr = [] // [20, 37, 20, 21]

//   for (let i = 0; i < arr.length; i++) {
//     if (!map.has(arr[i])) {
//       newArr.push(arr[i])
//       map.set(arr[i], 1)
//     } else if (map.get(arr[i]) < num) {
//       newArr.push(arr[i])
//       map.set(arr[i], map.get(arr[i]) + 1)
//     }
//   }
//   return newArr
// }

console.log(outputNth([20, 37, 20, 20, 21], 2));