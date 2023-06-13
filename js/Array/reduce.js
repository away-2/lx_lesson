const arr = [
    { name:'aaa', age: 18 },
    { name:'bbb', age: 19 },
    { name:'ccc', age: 20 },
    { name:'ddd', age: 21 }
]

Array.prototype.my_reduce = function(callback,...arg){
    let pre
    if(arg.length){
        pre = arg[0]
    }else{
        pre = this[0]
    }
    for(let i = 1; i< this.length; i++){
     pre = callback(pre,this[i],i,this)
        }
        return pre
}

const sum = arr.my_reduce((pre, current, index, arr) =>{
    console.log(pre, current, index);
    return pre += current.age
},0,1,2,3)

console.log(sum);