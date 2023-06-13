const arr = [
    { name:'aaa', age: 18 },
    { name:'bbb', age: 19 },
    { name:'ccc', age: 20 },
    { name:'ddd', age: 21 },

]

Array.prototype.my_findIndex = function(callback){
    for(let i = 0; i < this.length; i++){
        const flag = callback(this[i],this,i)
        if(flag){
            return i
        }
    }
    return -1
}

const index = arr.findIndex((item, index, arr) =>{
    return item.age > 30
})

console.log(index);
// console.log(arr.indexOf('hello'));