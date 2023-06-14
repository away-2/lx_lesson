let onWatch = (obj, getVal, setVal) => {
    let handler = {
      get(target, key, receiver) {
        // return target[key]
        getVal()
        return Reflect.get(target, key, receiver)
      },
      set(target, key, value, receiver) {
        // target[key] = value
        Reflect.set(target, key, value)
        setVal()
      },
    }
  
    return new Proxy(obj, handler)
  }
  
  let obj = { a: 1 }
  let newObj = onWatch(
    obj, 
    () => {
      console.log('你又来取值了');
    },
    changeView
  )
  
  newObj.a = 2
  
  function changeView() {
    console.log('页面更新了');
  }