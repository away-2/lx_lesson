const arr = [
    { name:'aaa', age: 18 },
    { name:'bbb', age: 19 },
    { name:'ccc', age: 20 },
    { name:'ddd', age: 21 }
]

Array.prototype.my_some = function(callback){
    // const flag = 1
    for(let i = 0; i< this.length; i++){
      const res = callback(this[i],i.this) 
        if(!res){
            return true
        }
       
    }
    return false
}

const flag = arr.some((item,index,arr) =>{
    // console.log(item,index,arr);
    return item.age > 20
})

console.log(flag);