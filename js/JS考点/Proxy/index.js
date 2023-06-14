// let p = new Proxy(target, handler)

// obj.a 
// obj.b = 2
// console.log(obj.hasOwnProperty('a'));
// obj.a = 11


let obj = {
    a: 1
  }
  
  function observe() {
    console.log('a变化了');
  }
  // Object.defineProperty()
  obj.a = 2
  obj.a = 3