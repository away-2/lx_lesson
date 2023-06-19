// LRUCache

var LRUCache = function(capacity) {
    this.catch = new Map()    // size has get set 
    this.capacity = capacity

};


LRUCache.prototype.get = function(key) {
    if (this.catch.has(key)) {
        let value = this.catch.get(key)
        this.catch.delete(key)
        this.catch.set(key, value)
        return value
      } else {
        return -1
      }
};


LRUCache.prototype.put = function(key, value) {
    if (this.catch.has(key)) {
        this.catch.delete(key)  
    }
    if(this.catch.size > this.capacity) {
        // this.catch.keys().next()  得到map对象中的第一个
    this.catch.delete(this.catch.keys().next().value);
  }
  this.catch.set(key, value)
};

let lruCatch = new LRUCache(4);
lruCatch.put(1,1)
lruCatch.put(2,2)
lruCatch.put(3,3)
lruCatch.put(4,4)
lruCatch.get(1)
lruCatch.put(5,5)
console.log(lruCatch);
// {
//     1:1,
//     2:2,
//     3:3,
//     4:4
// }
