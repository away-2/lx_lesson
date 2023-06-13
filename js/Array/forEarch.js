const arr = [
    { name:'aaa', age: 18 },
    { name:'bbb', age: 19 },
    { name:'ccc', age: 20 },
    { name:'ddd', age: 21 }
]

// for(let item of arr){
//     if(item.age === 18){
//         item.age = 17
//         // return
//     }
//     console.log('aaa');
// }

Array.prototype.my_forEach = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
    
}

arr.my_forEach((item, index, arr) => {
    if(item.age === 18){
        item.age = 17
        return
    }
    console.log('hello');
})

// console.log(arr);