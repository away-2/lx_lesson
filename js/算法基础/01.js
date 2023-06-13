// 查找数组中重复项最多的元素

let lines = [
    '192.168.2.1',
    '192.168.1.1',
    '192.168.2.1',
    '192.168.2.1',
    '192.168.2.2',
    '192.168.2.2'
]

// 基础硬刚版
// function mostFrequency(ipLines) {
//     let map = {
       
//     }
//     for(let item of ipLines){
//         if(Object.keys(map).includes(item)){  // map 已经具有此时的item为key
//             // Object.keys(map).indexOf(item) == 1
//            map[item] += 1 
//         } else{
//             map[item] = 1
//         }    // console.log(item);
//     }
    
//     // console.log(map);
//     // console.log(Object.values(map));
//     let max = 0
//     for(let key in map){
//         // console.log(map[key]);
//         // console.log(map);
//         // console.log(key);
//         if(map[key] > max) {
//             max = map[key]
//             res = key
//         }
//     }
//     // console.log(max,res);
//     return res
// }

// 进阶版
// const mostFrequency = (ipLines) =>{
//     let map = new Map()

//     for(let item of ipLines){
//         if(map.has(item)){
//             map.set(item,map.get(item)+1)

//         }else {
//             map.set(item,1)
//         }
//     }

//     let max = 0, res = ''
//     map.forEach((val,key) => {
//         if(val > max) {
//             max = val
//             res = key
//         }
//         // console.log(val,key);    
//     })
//     return res
// }

// 最终版
const mostFrequency = (ipLines) =>{
    let [obj, max, res] = [{}, 1, '']
    ipLines.forEach(item => {
        if(obj[item]){ // item已经存在于obj之中
            obj[item]++
            if(obj[item] > max){
                max = obj[item]
                res = item
            }
        }else{
            obj[item] = 1
        }
    })
    return res 
}

console.log(mostFrequency(lines));

// 对象这种数据结构它的特征是key只能是字符串
let a = {}
a.b = 1