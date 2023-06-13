const arr = [
    { name:'aaa', age: 18 },
    { name:'bbb', age: 19 },
    { name:'ccc', age: 20 },
    { name:'ddd', age: 21 }
]

Array.prototype.my_filter = function(callback){
    const res = []
    for(let i = 0; i< this.length; i++){
       if (callback(this[i],i.this) && res.push(this[i])){
        res.push(this[i])
       }
    }
    return res
}

const newArr = arr.filter((item,index,arr) =>{
    // console.log(item,index,arr);
    return item.age > 19
})

console.log(newArr);