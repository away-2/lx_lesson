const arr = [
    { name:'aaa', age: 18 },
    { name:'bbb', age: 19 },
    { name:'ccc', age: 20 },
    { name:'ddd', age: 21 },
]

Array.prototype.my_find = function(callback){
    for(let i = 0; i < this.length; i++){
        const flag = callback(this[i],this,i)
        if(flag){
            return this[i]
        }
    }
    return undefined
}

const index = arr.find((item, index, arr) =>{
    return item.age > 19
})

console.log(index);
// console.log(arr.indexOf('hello'));