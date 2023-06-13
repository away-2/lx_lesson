const arr = ['a','b','c','d','e','f']

Array.prototype.my_join = function(s=','){
    let str = ''
    for(let i = 0;i < this.length; i++){
        str += `${this[i]}${s}`
    }
    return str.slice(0,str.length-1)
}

const str = arr.my_join('+')

console.log(str)