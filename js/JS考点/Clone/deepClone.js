let obj = {
  a: '1',
  b:{
        c: '2',
    d:{
      e:'3',
      f:{
        j:'4'
      }
    }
  }
}

  function deepClone(obj){
    function isObject(o){
      if((typeof o === 'object' || typeof o === 'function')&& o !== null){
        return true
      }
      return false
    }
    let newObj = Array.isArray(obj) ? [] : {}
    for(let key in obj) {
      if(Reflect.ownKeys(obj).includes(key)){ // obj显示具有的属性才拷贝  //Object.prototype.hasOwnProperty(key)
        newObj[key] = isObject(obj[key]) ? deepClone(obj[key]) : obj[key]
      }
    }
    return newObj
  }

  let newObj = deepClone(obj)
  obj.b.d.e = 8
  console.log(newObj);