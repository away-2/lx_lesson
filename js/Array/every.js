const arr = [
    { name:'aaa', age: 18 },
    { name:'bbb', age: 19 },
    { name:'ccc', age: 20 },
    { name:'ddd', age: 21 }
]

Array.prototype.my_every = function(callback){
    // const flag = 1
    for(let i = 0; i< this.length; i++){
      const res = callback(this[i],i.this) 
        if(!res){
            return false
        }
       
    }
    return true
}

const flag = arr.every((item,index,arr) =>{
    // console.log(item,index,arr);
    return item.age > 19
})

console.log(flag);