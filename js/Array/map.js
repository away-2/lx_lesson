const arr = [
    { name:'aaa', age: 18 },
    { name:'bbb', age: 19 },
    { name:'ccc', age: 20 },
    { name:'ddd', age: 21 }
]

Array.prototype.my_map = function(callback){
    const res = []
    for(let i = 0; i<this.length; i++){
        res.push(callback(this[i],i,this))
    }
    return res
}

const newArr = arr.my_map((item, index, arr) => {
    if(item.age > 19){
        return item
    }   
})

console.log(newArr);