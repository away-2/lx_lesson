const arr = [
    'a','b','c','d'
]

Array.prototype.my_includes = function(val, start = 0){
    if(start < 0) start = this.length + start
    for(let i = start; i< this.length; i++){
        if(this[i] === val){
            return true
        }
    }
    return false
}

const flag = arr.includes('c',-2)  // arr.length + (-2)

console.log(flag);